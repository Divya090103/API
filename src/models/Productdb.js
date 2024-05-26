require("dotenv").config();
const connect=require("../db/connect");
const Product=require("./Schema");
const json=require("./Product.json")
const MONGODB_URL="mongodb://localhost:27017/Products"
const start=async()=>{
  try{
    await connect(MONGODB_URL);
    await Product.create(json);
    console.log("success")
  }
  catch(e){
    console.log(e);
  }
};
start();