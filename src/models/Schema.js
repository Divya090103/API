const express = require('express');
const { default: mongoose, Mongoose } = require("mongoose")
const productschema=new mongoose.Schema({
  id:{
   type:String,
   required:true,
  },
   name:{
    type:String,
    required:true
   },
   reviews:{
    type:Number,
    required:true
   },
  price:{
    type:Number,
    required:true,
    min: 0 
  },
  description:{
    type:String,
    required:true
  },
  company:{
    type:String,
    required:true
  },
  stock:{
    type:String,
    required:true
  },
  stars:{
    type:Number,
    required:true,
 
  },
  colors:[],
  images:[],
 
})
const Product = mongoose.model("Product", productschema);

module.exports = Product;