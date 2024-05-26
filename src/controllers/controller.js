const Products=require("../models/Schema")
const Allproducts= async (req,res)=>{
 const {name,id}=req.query;
 const queryobj={};
 if(name){
  queryobj.name=name

 }
 if(id){
  queryobj.id=id;
 }
 console.log(queryobj)
  const product=await Products.find(queryobj)
res.json({product});
}
const testproduct=async (req,res)=>{
  const product=await Products.find({})
  res.json({product});

}
module.exports={Allproducts,testproduct}