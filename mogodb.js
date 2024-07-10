const mongoose = require("mongoose");
const URL ="mongodb+srv://ameeruddincodersnest:8BVh6xlNNnhgiVSn@cluster0.gl79tgn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
exports.connectDB =async()=>{
    mongoose
    .connect(URL)
    .then((res)=>console.log("database is running"))
    .catch((res)=>console.log("error database"))
};

// 8BVh6xlNNnhgiVSn
// ameeruddincodersnest
// mongodb+srv://ameeruddincodersnest:8BVh6xlNNnhgiVSn@cluster0.gl79tgn.mongodb.net/
//mongodb+srv://ameeruddincodersnest:<password>@cluster0.gl79tgn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


// FtJ52BPnKPUqFSOc
// ameeruddincodersnest
//   link= mongodb+srv://ameeruddincodersnest:FtJ52BPnKPUqFSOc@cluster0.jdgn6u8.mongodb.net/