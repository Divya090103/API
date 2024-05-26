const mongoose=require("mongoose")
const uri="mongodb://localhost:27017/Products"
const connect=()=>{
  console.log("connect db");
 return  mongoose.connect(uri)
 .then(() => {
     console.log('Connected to MongoDB',uri);
 })
 .catch((error) => {
     console.error('Error connecting to MongoDB:', error);
 });
}
module.exports=connect;