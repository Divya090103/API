const express=require("express")
const router=express.Router();
const {Allproducts,testproduct}=require("../controllers/controller")
router.route("/").get(Allproducts);
router.route("/testing").get(testproduct);
module.exports=router;