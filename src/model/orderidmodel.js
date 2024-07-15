const { default: mongoose, model } = require("mongoose");

const OrderSchema= mongoose.Schema({
    user_id:String,
    product_id:String,
    order_id:String
    // Time:{type:Date}

});

module.exports=mongoose.model("Order",OrderSchema);
