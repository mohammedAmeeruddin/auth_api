const express =require("express");
const{signUpuser,loginUser,getAllUsers,getAuser,updateUser,deleteUser}=require("../controller/usercontroller");
const {authmiddleware}=require("../middleware/auth.js");
const Router =express.Router();
Router.post("/create/signup",signUpuser);
Router.post("/login/user",loginUser);
Router.get("/users",authmiddleware,getAllUsers);
Router.get("/user",authmiddleware,getAuser);
Router.put("/update",authmiddleware,updateUser);
Router.delete("/delete",authmiddleware,deleteUser);

module.exports=Router;