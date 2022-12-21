const express=require("express");
const router=express.Router();
const {register,login,logout,update,find}= require("../controller/auth");
const {verifyToken}= require("../verifytoken")



router.post("/register",register)
router.post("/login",login)
//router.get("/logout",logout)
router.get("/find",verifyToken,find)
router.put("/update",verifyToken,update)

module.exports=router   