const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilepic:{
        type:String,
        default:""
    },
},{timestamps:true}
);

module.exports=Mongoose.model("User",UserSchema);