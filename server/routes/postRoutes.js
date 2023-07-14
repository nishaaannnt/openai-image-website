import express from 'express';
import * as dotenv from 'dotenv'

import {v2 as cloudinary} from 'cloudinary';
const router=express.Router();

import Post from '../mongodb/models/post.js'

dotenv.config();
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

// GET ALL POSTS

router.route('/').get(async(req,res)=>{
    try{
        const allPost=await Post.find({});
        res.status(200).json({success:true,data:allPost});
    }catch(error){
        res.status(500).json({success:false,message:error.message});
    }
})

// CREATE POST
router.route('/').post(async(req,res)=>{
    try {
        const {name,prompt,photo}=req.body;
    const photoUrl= await cloudinary.uploader.upload(photo);
    
    const newPost=await Post.create({
        name:name,
        prompt:prompt,
        image:photoUrl.url
    })

    res.status(200).json({success:true,data:newPost});
    
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
})

export default router;