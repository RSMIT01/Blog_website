const router =require('express').Router();
const bcrypt = require('bcrypt');
const User=require('../models/User');

// register 
router.post("/register",async (req,res)=>{
    try {
        const salt=await bcrypt.genSalt(10);
         const hashedpass=await bcrypt.hash(req.body.password,salt)
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedpass
        })
        const user=await newUser.save();
        const {password,...all}=user._doc;
        res.status(200).json(all);
    } catch (error) {
      
        res.status(500).json(error);
    }
});


//login
router.post("/login",async (req,res)=>{
    try {
        const user= await User.findOne({email:req.body.email})
        !user && res.status(400).json("wrong username or password");
        
        const valid=await bcrypt.compare(req.body.password, user.password);
        !valid && res.status(400).json("wrong username or password");
        const {password,...all}=user._doc;
        res.status(200).json(all);
    } catch (error) {
        res.status(500).json(error);
    }
});  
module.exports=router;