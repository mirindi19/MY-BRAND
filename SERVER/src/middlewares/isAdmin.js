const jwt =require("jsonwebtoken");
const users =require("../models/users");

const isAdmin = async (req, res, next) => {

  // const Token = req.cookies.jwt
//   if(token){
//       jwt.verify(token,'mirinditokensecrete',async(err,decodedtoken)=>{
//           if(err){
//               res.status(400).json({"message":err})
//   // next()
//           }
//           if(decodedtoken){
//               const data= await users.findById(decodedtoken.id)
//               res.status(200).json({
//                 data:token
//               })
//               // if(data){
//               //    if(data.email=="admin@gmail.com"){
//               //     next()
//               //    }
//               //    else{
//               //     res.status(400).json({"message":"Only Admin can perform this action"})
//               //    }
//               // }else{
//               //     res.status(400).json({"message":"user not found"})
//               // }
//           }
//       })
//   }else{
//       res.status(401).json({"message":"Log In first !!"})
// }

  const Token = req.headers["token"];
  if (!Token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = await jwt.verify(Token, process.env.JWT_SECRET);
    req.user = decoded;
   const email = req.user.email;
    const found = await users.findOne({email} );
    if (!found) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }
    if (found.role == "Admin") {
      return next();
    } else {
      return res.status(403).json({
        status: 403,
        message: "Only Admin allowed",
      });
    }
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
};
module.exports=isAdmin;
