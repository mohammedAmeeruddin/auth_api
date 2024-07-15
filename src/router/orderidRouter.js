const express =require("express");
const {createOrderid}=require("../controller/orderidcontroller");
const {authmiddleware}=require("../middleware/auth");
const Router =express.Router();
Router.post("/create/orderid",authmiddleware,createOrderid);


module.exports =Router;
