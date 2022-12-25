const express = require("express");
const Router = express.Router()
const userSchema = require("../models/homeSchema");

Router.get("/", (err, res) => {
  // res.send("server is running");
res.render('signup',{title:"Fill Form",email:'',name:'',password:''})
});


Router.post("/signup", async (req, res) => {
  
   try{
     const {name,email,password} = req.body
     const userData = new userSchema({
       name,
       email,
       password,
     })
     userData.save(err=>{
      if(err){
       res.render("signup", {title: "Sorry email and userName should be unique",email:"",name:"",password:"",});
      
    }else{
      res.render("signup", {title: "Done",email:"",name:"",password:"",});
      }

     })
     
  } 
  
  catch (error) {
    res.render("signup", {
      title: "Error in code",
      email: "",
      name: "",
      password: "",
    });
  }
});

Router.post('/login',(req,res)=>{
  const {
    name,password
  } = req.body

  userSchema.findOne({name:name},(err,result)=>{
    if(name===result.name && password===result.password){
      res.render('dashboard',{name:result.name})
    }else{
      res.render("signup", {
        title: "Sorry kindly check password user name",
        email: "",
        name: "",
        password: "",
      });
    }
  })
})

module.exports = Router;