require("dotenv").config();
const express =require('express')
const app=express();
const port=process.env.PORT||3000
const router=require("./src/routers/routes")
const connect=require("./src/db/connect")
// const Product=require("./src/models/Schema")
//middle ware
app.use("/api/products",router);

//we use post method to read data from databse
app.get("/",(req,res)=>{
  res.send("my new server");
})
app.listen(port,(req,res)=>{
  connect();
  console.log(`my post no is ${port}`);
})