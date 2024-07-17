const app =require("./app");
const {connectDB} =require("./mogodb");
const {PORT_NUMBER}=require("./data.json");
const callserver = ()=>console.log("your server is running"+" "+PORT_NUMBER);
connectDB();
app.listen(PORT_NUMBER,callserver);