const mongoose =require("mongoose");
const productSchema =mongoose.Schema({
    brandname:String,
    discription:String,
    prise:Number,
    rating:Number
});

module.exports=mongoose.model("product",productSchema);