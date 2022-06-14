const Mongoose  = require("mongoose");

const PostSchema = new Mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:false
    },
    username:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:false
    }
},{timestamps:true}
);

module.exports=Mongoose.model("Post",PostSchema);