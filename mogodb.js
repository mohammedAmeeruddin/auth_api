const mongoose = require("mongoose");
const { MONGO_URL } = require("./src/constants");
exports.connectDB =async()=>{
    mongoose
    .connect(MONGO_URL)
    .then((res)=>console.log("database is connected"))
    .catch((res)=>console.log("error database"))
};