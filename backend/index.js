const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const authroute=require("./routes/auth")
const userroute=require("./routes/users")
const postroute=require("./routes/posts")
const multer=require("multer")
const path=require("path");

dotenv.config();
app.use(express.json());

try {
    mongoose.connect(process.env.MONGODB_URL, 
        // {useNewUrlParser: true,
        //      useUnifiedTopology: true,
        //      useCreateIndex: true},
        ()=>{
        console.log("connected to mongodb");
    });
    
} catch (error) {
    console.log(error)
}
app.use("/images",express.static(path.join(__dirname,"public/images")))

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images");
    },filename:(req,file,cb)=>{
        cb(null,req.body.name);
    }
})

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file uploaded")
})


app.use("/api/auth",authroute);
app.use("/api/users",userroute);
app.use("/api/posts",postroute);




app.listen("3001",()=>{
    console.log("server is started");
})