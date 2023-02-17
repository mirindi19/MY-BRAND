const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    Fullname:{
        type:String
    },
    age:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String
    },
});
module.exports=mongoose.model("users",UserSchema);