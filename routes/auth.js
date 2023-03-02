const express =require("express");
const mongoose =require("mongoose")
const app = express();
app.use(express.json())
const router = express.Router();


const User =require("../models/userSchema")
       require("../db/conn")


router.get('/',async(req,res)=>{
    // res.send("hii this is router home page ")
    const data = await User.find()
    return res.send({data:data})
})


router.post("/login",async(req,res)=>{
    const {email,password}= req.body;
    if(!email || !password){
        return res.status(400).json({message:"please fill details properly"})
    }else{
        let login_user= await User.findOne({email:email});
        if(login_user){
            return res.status(201).json({message:"login successfully"})
        }else{
               return res.status(400).json({message:"you don`t have an acount please signUp"})
        }
    }
})


router.post("/register",async(req,res)=>{
    const {name,phone,email,password}=req.body;
    if(!name || !phone || !password){
        return res.status(422).json({message:"please fill all details properly"})
    }


   let userExist = await User.findOne({email:email})
       if(userExist){
        return res.status(422).json({message:"user exist already"})
       }else{
        const user = new User({name,email,password,phone})
        user.save().then(()=>{
            res.status(201).json({message:"user data  is saved"})
        }).catch((err)=>res.status(500).json({err:err}))
       }
         

})
module.exports =router;