import express from "express";
// import * as dotenv from "dotenv";
import User from "../mongodb/models/user.js";
import bcrypt from "bcrypt";
const router = express.Router();


// To create a new user
router.route("/").post(async(req,res)=>{
    try{
        console.log(req.body);
        const{firstname,lastname,email,password}=req.body;
        const userExist=await User.findOne({email:email});

        if(userExist){
            return res.status(400).json({message:"User already exists"});
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const newUser=new User({
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:hashedPassword,
        });

        await newUser.save();
        console.log(newUser);
        res.status(201).json({message:"user created successfully"});

    }catch(error){
        console.log(error.message);
    }
})


// To login a user


export default router;

