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
            const token=jwt.sign({userId:userExist._id},process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
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

export default router;