import User from "../mongodb/models/user.js";
import express from "express";
import bcrypt from "bcrypt";

const router=express.Router();

router.route("/").post(async(req,res)=>{
    const {email,password}=req.body;

    const userExist=await User.findOne({email:email});
    if(userExist){
        if(await bcrypt.compare(password,userExist.password)){
            res.status(200).json({message:"Login successful"});
        }
        else{
            res.status(400).json({message:"Invalid credentials"});
        }
    }else{
        res.status(400).json({message:"Invalid Email"});
    }
})

export default router;