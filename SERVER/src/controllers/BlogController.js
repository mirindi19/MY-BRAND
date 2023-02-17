const { request } = require("express");
const Blogs = require("../models/Blogs");
const Blog=require("../models/Blogs");

const {uploadImage,deleteImage} =require("../utils/cloudinary");
class BlogController{
    static async AddBlog(req,res){
       
        const image = await uploadImage(req.file.path, "blog_images")


        const data={
            title: req.body.title,
            content: req.body.content,
            image: image.url,
            cloudinary_id: image.publicId
        }
        const AddNewBlog=new Blog(data);
    try {

        const savedBlog=await AddNewBlog.save();
       return res.status(201).json({
            status:201,
            message:"Article Added in Blog",
            data:savedBlog
        });  
    } catch (error) {
        res.status(500).json(error)
        
    }
    }

    static async deletBlog(req,res){
        const blogToDeleteImage = await Blogs.findOne({ _id: req.params.id })
        const publicId = blogToDeleteImage.cloudinary_id
        await deleteImage(publicId)
        Blogs.deleteOne( { _id: req.params.id }, (err, blog) => {
            if (!err) {
                res.status(200).json({
                    status: 200,
                    message: "Deleted Successfull ",
                    data:blog
                    
                 })
            } else {
                res.status(404).json({
                    status: 404,
                    message: "Blog to Delete Not Found",
                })
            }
        })
    }

    static async findData(req,res){
        const blogList = await Blog.find()
        res.send(
            res.status(200).json({
                status:200,
                message:"List of Blogs",
                data:blogList
            }) 
        )
    }

    static async updateBlog(req,res){
        const data = await uploadImage(req.file.path, "blog_images")
        const blogToDeleteImage = await Blogs.findOne({ _id: req.params.id })
        const publicId = blogToDeleteImage.cloudinary_id
        await deleteImage(publicId)
        const blogData = {
            title : req.body.title,
            image : req.body.image,
            content : req.body.content,
            cloudinary_id: data.public_id,
            image: data.url,
            date : new Date()
        }
        
        Blogs.findOneAndUpdate( { _id:  req.params.id },{ $set:blogData },{ new:true }, (err,blog) => {
            if (!err) {
                res.status(200).json({
                    code: 200,
                    message: "Blog updated",
                    UpdatedBlog: blog,
                })
            } else {
                res.status(404).json({
                    code: 404,
                    message: "Blog to Update not found",
                })
            }
        })
    }

    static async FindById(req,res){
        try {
            const searchBlog = await Blog.findOne({ _id: req.params.id })
            res.send( res.status(200).json({
                status:200,
                message:"Your Blogs",
                data:searchBlog
            }) )
        } catch (error) {
            res.send( res.status(404).json({
                status:404,
                error:"Blogs doesn't exist!",
            }) 
            )
        }
      
    }
}
module.exports =BlogController;