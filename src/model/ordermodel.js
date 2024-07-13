const express =require("express");
const { default: mongoose } = require("mongoose");

const orderSchema= mongoose.Schema({
    user_id:String,
    product_id:String,
    order_id:String,
     time:{typr:Date}

})