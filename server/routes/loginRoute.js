import User from "../mongodb/models/user.js";
import express from "express";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

// const jwt= require("jsonwebtoken");

const router=express.Router();

router.route("/").post(async(req,res)=>{
    const {email,password}=req.body;

    const userExist=await User.findOne({email:email});
    if(userExist){
        if(await bcrypt.compare(password,userExist.password)){

            // create a JWT token
            const token=jwt.sign({user:userExist},process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
            res.cookie('token',token);
            res.status(200).json({message:"Login Successfull",user:userExist,token});
        }
        else{
            res.status(400).json({message:"Invalid credentials"});
        }
    }else{
        res.status(400).json({message:"Invalid Email"});
    }
})

router.route("/").get(async(req,res)=>{
    const token=req.headers.authorization;
    if(token){
        try{
            const decodeToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
            res.status(200).json({decodeToken});
        }catch(err){
            res.status(403).json({message:"Invalid Token"});
        }
    }else{
        res.status(403).json({message:"No Token"});
    }
})

export default router;