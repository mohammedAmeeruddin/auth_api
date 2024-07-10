const app =require("./app");
const {connectDB} =require("./mogodb");
const port =2000;
const callserver =()=>{
console.log("your server is running")
};
connectDB();

app.listen(port,callserver);