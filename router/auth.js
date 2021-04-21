const express = require('express');
const bcrypt= require('bcryptjs');
const router = express.Router();
const User=require('../model/userschema');
const authenticate=require('../middleware/authenticate');
require('../db/conn');

// router.get('/', (req, res) => {
//     res.send(`Hello world from the server rotuer js`);
// });

router.post('/register', async(req, res) => {
    const {name,email,work,password,cpassword}=req.body;
    if(!name || !password || !email || !work || !cpassword)
    return res.status(422).json({error:"Please fill all the feilds"});

    try{
        const userexist=await User.findOne({email:email});
        if(userexist)
        return res.status(417).json({error:"Email already exist"});
         const user=new User({name,email,work,password,cpassword});
         if(password!=cpassword)
         return res.status(423).json({error:"Passwords dont match"});

         
         const userregister=await user.save();
         if(userregister){
             res.status(201).json({message:"User registered succesfully"});
         }
         else
         {
             res.status(500).json({error:"Failed to register"});
         }

    }catch(err){
      console.log(err);
    }

});
router.post('/login',async(req,res)=>{
    const {password,email}=req.body;
    if(!password || !email)
    return res.status(422).json({error:"Please fill all the feilds"});
    
    try{
        const userexist=await User.findOne({email:email});
        if(userexist){
         
           const userpass= await bcrypt.compare(password, userexist.password);
           const token= await userexist.generateAuthToken();
           res.cookie("jwtoken",token, {
               expires:new Date(Date.now()+25892000000),
               httpOnly:true
           });
            if(userpass)
            res.status(201).json({message:"User loged in succesfully"});
                else
        return res.status(423).json({error:"Invalid password"});
        }
        else
        return res.status(424).json({error:"No such existing account found"});

    }catch(err){
      console.log(err);
    }



});
//about page
router.get('/about', authenticate ,(req, res) => {
    console.log(`Hello my About`);
    res.send(req.rootuser);
});
router.get('/getdata',authenticate,(req,res)=>{
    console.log(`Hello my About`);
    res.send(req.rootuser);
});
//contact
router.post('/contact',authenticate,async(req,res)=>{
   try{
       const{name,email,message}=req.body;
       if(!name || !email || !message){
           console.log("err in contact form");
           return res.json({err:"please fill all feilds"});
       }
           const usercontact=await User.findOne({ _id:req.userid});

           if(usercontact){
             const usermessage=await usercontact.addmessage(name,email,message);
             await usercontact.save();
             res.status(201).json({message:"user contact succesfull"});
           }
        

   }catch(err){
       console.log(err);
   }
});
//logout page
router.get('/logout', authenticate ,(req, res) => {
    console.log(`Hello my logout`);
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('User loged out');
});
module.exports = router;