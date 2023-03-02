const express = require("express");
const dotenv= require("dotenv");
dotenv.config()
//  const User =require("./models/userSchema")
// require("./db/conn")
const app = express();
const port = process.env.PORT || 3000;
dotenv.config({path:'./config.env'})
app.use(express.json())
app.use(require('./routes/auth'))
   require("./db/conn")

// 
 app.get("/", (req,res)=>{
    res.send("hello world from server")
 })
// middle ware 

//  const middleware = (req,res, next)=>{
//     console.log("hello my middleware");
//     next();
//  }

//  app.get("/about",middleware,(req,res)=>{
//     console.log("hii this my my about page");
//     res.send("hii this is about page from server")
//  })
//  app.get("/contact", (req,res)=>{
//     res.send("hello world   contact page ")
//  })

//  app.get("/signin", (req,res)=>{
//     res.send("hello world from sign in page")
//  })


app.listen(port,()=>{

    console.log(`your app is running at port num ${port}`);
})
