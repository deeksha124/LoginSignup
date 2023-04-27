const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/LoginSignup")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("Failed to connect");
})

const LoginSchema= new mongoose.Schema({
    name:{
        type :String,
        required: true
    },
    password :{
        type : String,
        required: true
    }
})

const collection = new mongoose.model("Collection",LoginSchema)
module.exports=collection