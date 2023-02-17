const mongoose=require('mongoose');

const BlogSchema=new mongoose.Schema({
    title:{
            type:String
    },
    content:{
        type:String
    },
    image:{
        type:String
    },
    cloudinary_id:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now,
    },

});
module.exports=mongoose.model("Blogs",BlogSchema);