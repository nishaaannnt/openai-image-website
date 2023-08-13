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

            const token=jwt.sign(userExist,process.env.ACCESS_TOKEN_SECRET);
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