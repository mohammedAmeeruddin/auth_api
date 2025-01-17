const express =require("express");
const app =express();
const cors =require("cors");
const userRouter =require("./src/router/userRouter");
const productRouter =require("./src/router/productRouter");
const orderidRouter =require("./src/router/orderidRouter");
app.use(cors());
app.use(express.json());

app.use("/api",userRouter);
app.use("/api",productRouter);
app.use("/api",orderidRouter);



module.exports=app;