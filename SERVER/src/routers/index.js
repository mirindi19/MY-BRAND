const router=require("express").Router();
const blogRouter=require("./blog.routers"); 
const contactRouter=require("./contact.routers");
const authRouter=require("./auth.routers");
router.use("/blog",blogRouter);
router.use("/contat",contactRouter);
router.use("/auth",authRouter);
module.exports =router;