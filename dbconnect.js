require('dotenv').config();
const mongoose=require("mongoose");


exports.connect=async()=>{
await mongoose.connect(process.env.mongo_url).then(()=>{
    console.log("guvi db connected")
})
.catch((err)=>{
    console.log("weak network")
}) 
 
};           