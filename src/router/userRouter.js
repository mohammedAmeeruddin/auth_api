const express =require("express");
const{signUpuser,loginUser,getAllUsers,getAuser,updateUser,deleteUser}=require("../controller/usercontroller");
const Router =express.Router();
Router.post("/create/signup",signUpuser);
Router.post("/login/user",loginUser);
Router.get("/users",getAllUsers);
Router.get("/user",getAuser);
Router.put("/update",updateUser);
Router.delete("/delete",deleteUser);

module.exports=Router;