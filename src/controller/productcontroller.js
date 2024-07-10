const product =require("../model/productmodel");

exports.createProduct=async(req,res)=>{
    try {
        const { brandname,discription,prise,rating}=req.body;
        if(!brandname || !discription || !prise || !rating){
            res.status(404).json({message:"please fill the details"}); };
            const data = {brandname,discription,prise,rating};
            await product.create(data);
            res.status(200).json({message:"product created sucessfully"});
        
    } catch (error) {res.status(500).json({message:error.message});};
};

exports.getAllProducts=async(req,res)=>{
    try {
        const products =await product.find();
        res.status(200).json({products});
    } catch (error) { res.status(500).json({message:error.message});};
};

exports.updateProduct=async(req,res)=>{
    try {
        const {brandname,discription,prise}=req.body;
        if(!brandname || !discription || !prise){
            res.status(404).json({message:"please fill the details"}); };
            const newproduct =await product.findByIbAndUpdate(id,{brandname,discription,prise},{new:true});
            res.status(200).json({newproduct});
        
    } catch (error) {res.status(500).json({message:error.message});};
};

