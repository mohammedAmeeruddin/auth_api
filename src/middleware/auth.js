const User =require("../model/usermodel");
const jwt =require("jsonwebtoken");

exports.authmiddleware=async(req,res,next)=>{
try { 
    const {token}=req.headers;
if(!token){res.status(404).json({message:"invalid token"});};

const {id}=await jwt.verify(token,"amdgjkf@#&njkhk");
const user =await User.findById(id);
if(!user){res.status(404).json({message:"user not found"});};
req.user = user.id;


    next();
} catch (error) {console.log(error); res.status(500).json({message:error.message});};
};
