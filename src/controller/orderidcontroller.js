const Order =require("../model/orderidmodel");

exports.createOrderid=async(req,res)=>{
    try {
        const id=req.user;
        const {user_id,product_id,order_id}=req.body;
        if(!user_id || !product_id || !order_id){
            return res.status(404).json({message:"fill the details"});};
              await Order.findById(id);
            if (!id){return res.status(400).json({message:"id not defined"});};
           const order= await Order.create({user_id,product_id,order_id});
           return res.status(200).json({message:"order created sucessfully",order});
    } catch (error) {
        return res.status(500).json({message:error.message});};
};