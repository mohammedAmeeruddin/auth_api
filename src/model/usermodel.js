const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
email:String,
password:String,
name:String
});

module.exports= mongoose.model("User",userSchema);
