const mongoose = require("mongoose");
const dotenv = require("dotenv");

//LOAD DOTENV FILES
// dotenv.config({ path: "./src/configs/config.env" });
dotenv.config();
mongoose.set('strictQuery', true);
const connectionString = process.env.MONGOOSE_URI;
const dbConnect = async (next) => {
    mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
        console.log("connect to mongoDB");
    })
    
};
module.exports = dbConnect;