const express=require("express");
const app=express();
const {mongoose} = require("mongoose");
const dotenv=require("dotenv");
const postsRoute=require("./routes/posts");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("connect to mongoDB");
})

app.use(express.json());
app.use("/api/posts",postsRoute);

const port =process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log("saver is started on",`${port}`);
})