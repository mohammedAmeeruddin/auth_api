const product =require("../model/productmodel");

exports.createProduct=async(req,res)=>{
    try {
        const userid=req.user;
        const { brandname,discription,prise,rating}=req.body;
        if(!brandname || !discription || !prise || !rating){
            return res.status(404).json({message:"please fill the details"}); };
            const data = {brandname,discription,prise,rating,userid};
           const Product = await product.create(data);
           return res.status(200).json({message:"product created sucessfully",Product});
        
    } catch (error) {res.status(500).json({message:error.message});};
};

exports.getAllProducts=async(req,res)=>{
    try {
        const products =await product.find();
       return res.status(200).json({products});
    } catch (error) { res.status(500).json({message:error.message});};
};

exports.updateProduct=async(req,res)=>{
    try {
        const userid = req.user;
        const {discription,prise,id}=req.body;
        if(!discription || !prise){
           return res.status(404).json({message:"please fill the details"}); };
           const Product=await product.findById(id);
           if(userid == Product.userid){
            const newproduct =await product.findByIdAndUpdate(id,{discription,prise},{new:true});
            return res.status(200).json({newproduct});
           }
           return res.status(400).json({
            message:"this product is not belong to these user"
           })      
        
    } catch (error) {res.status(500).json({message:error.message});};
};

exports.deleteProduct=async(req,res)=>{
    try {
        const id =req.user;
        await product.findByIdAndDelete(id);
        return res.status(200).json({message:"product deleted sucessfully"});
    } catch (error) {res.status(500).json({message:error.message});};
};

