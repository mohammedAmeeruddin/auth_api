const express=require("express");
const{createProduct,getAllProducts,updateProduct,deleteProduct}=require("../controller/productcontroller");
const {authmiddleware}=require("../middleware/auth");
const Router=express.Router();
Router.post("/create/product",authmiddleware,createProduct);
Router.get("/get/products",authmiddleware,getAllProducts);
Router.put("/updateproduct",authmiddleware,updateProduct);
Router.delete("/deleteproduct",deleteProduct)


module.exports=Router;