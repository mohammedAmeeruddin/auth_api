const app =require("./app");
const {connectDB} =require("./mogodb");
const { PORT_NUMBER } = require("./src/constants");
const callserver = ()=>console.log("your server is running"+" "+PORT_NUMBER);
connectDB();
app.listen(PORT_NUMBER,callserver);