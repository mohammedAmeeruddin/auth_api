const User =require("../model/usermodel");
const jwt =require("jsonwebtoken");
const {JWT_STRING}=require("../../data.json");

exports.authmiddleware=async(req,res,next)=>{
try { 
    const {token}=req.headers;
if(!token){ return res.status(404).json({message:"invalid token"});};

const {id}=await jwt.verify(token,JWT_STRING);
const user =await User.findById(id);
if(!user){return res.status(404).json({message:"user not found"});};
req.user = user.id;


    next();
} catch (error) {console.log(error);
    return res.status(500).json({message:error.message});};
};

