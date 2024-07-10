const express=require("express");
const{createProduct,getAllProducts,updateProduct}=require("../controller/productcontroller");
const {authmiddleware}=require("../middleware/auth");
const Router=express.Router();
Router.post("/create/product",authmiddleware,createProduct);
Router.get("/get/products",authmiddleware,getAllProducts);
Router.put("/updateproduct",authmiddleware,updateProduct);


module.exports=Router;