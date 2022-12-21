const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean, 
        default:false  
    }, 
    age:{
        type:String,
    }, 
    gender:{
        type:String,
    }, 
    dob:{
        type:String,
    }, 
    mobile:{
        type:String, 
    }, 
    about:{
        type:String, 
    }
   
},
{timestamps:true});

module.exports=mongoose.model("userfin",userschema) 