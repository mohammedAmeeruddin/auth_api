const User =require("../model/usermodel");
const jwt =require("jsonwebtoken");

exports.signUpuser=async(req,res)=>{
    try {
        const {email,password,name}=req.body;
        if(!email || !password || !name){
            res.status(404).json({
                message:"please fill the details proply" });};
        
        const user =await User.findOne({email});
        if(user){
            res.status(404).json({message:"uesr all ready exist"}); };
        await User.create({email,password,name});
        res.status(200).json({message:"user signup sucessfully"});
 } catch (error) {
        res.status(500).json({message:error.message}); };
};

exports.loginUser=async(req,res)=>{
    try {
        const {email,password}= req.body;
        if(!email || !password){
            res.status(404).json({message:"please check the given details"}); };
        const userExist=await User.findOne({email});
        if(!userExist){req.ststus(404).json({message:"opps! no user"})};
        if(userExist.password=!password){res.status(404).json({message:"invalid credintel"})};
        const id =userExist._id;
        const token = jwt.sign({id},"amdgjkf@#&njkhk")
        res.status(200).json({message:"login sucessfully",token});
        
    } catch (error) {res.status(500).json({message:error.message}); };
};

exports.getAllUsers=async(req,res)=>{
    try {
       const Users =await User.find();
        res.status(200).json({Users})
        
    } catch (error) {res.status(500).json({message:error.message}); };
};

exports.getAuser=async(req,res)=>{
    try {
        const {id} =req.query;
       const user= await User.findById(id);
        res.status(200).json({user});
    } catch (error) {res.status(500).json({message:error.message});};
};

exports.updateUser=async(req,res)=>{
    try {
        const{id}=req.query;
        const existUser=await User.findById(id);
        if(!existUser){res.status(400).json({message:"user not found"})};
        const {email,name}=req.body;
         if(!email || !name){res.status(404).json({message:"please provide the details for update"});};
        const newuser =await User.findByIdAndUpdate(id,{email,name},{new:true});
        res.status(200).json({newuser });

    } catch (error) {res.status(500).json({message:error.message});};
};
exports.deleteUser=async(req,res)=>{
    try {
        const {id}=req.query;
        await User.findByIdAndDelete(id);
        res.status(200).json({message:"user deleted sucessfull"})
    } catch (error) {res.status(500).json({message:error.message});};
};