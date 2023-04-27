const express =require("express")
const app= express()
const path=require("path")
const hbs= require("hbs")
const collection= require("./mongodb")
const { dirname } = require("path")
const async = require("hbs/lib/async")

const tempelatePath=path.join(__dirname,'../tempelates')
app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))
app.get("/",(req,resp)=>{
    resp.render("login.hbs")
})
app.get("/signup",(req,resp)=>{
    resp.render("signup.hbs")
})


app.post("/login",async(req,resp)=>{


})
app.post("/signup",async(req,resp)=>{

const data = {
    name : req.body.name,
    password : req.body.password

}  
await collection.insertMany([data])
resp.render("home")

})
app.post("/login",async(req,resp)=>{

    try{
        const check=await collection.findOne({name:req.body.name})
        if(check.password===req.body.password){
            resp.render("home")
        }
        else{
            resp.send("wrong password")
        }

    }
    catch{
        res.send("wrong detail")
    }
    })
    

app.listen(3000,()=>{
    console.log("port Connected");
})