const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");
dotenv.config();

const verifyToken=async(req, res, next)=>{
const token=req.headers['token']
//const token=authHeader && authHeader.split('')[1]
if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    // console.log(req.user)
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();

}
module.exports=verifyToken;



// const jwt=require("jsonwebtoken");
// const dotenv=require("dotenv");
// dotenv.config();

// const verifyToken=async(req, res, next)=>{
// // const token=req.headers['token']
// //const token=authHeader && authHeader.split('')[1]
// const token = req.cookies.jwt
// if(token){
//     jwt.verify(token,'mirinditokensecrete',(err,decodedtoken)=>{
//         if(err){
//             res.status(401).json({"Error":"Please Login First !!!"})
//         }
//         if(decodedtoken){
//              next()
//         }
//     })
// }else{
//     res.status(401).json({"Message":"Please Login First !!!"})
//  }
// // if (!token) {
// //     return res.status(404).send("A token is required for authentication");
// //   }
// //   try {
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //     req.user = decoded;
// //     // console.log(req.user)
// //   } catch (err) {
// //     return res.status(401).send("Invalid Token");
// //   }
// //   return next();

// }
// module.exports=verifyToken;

