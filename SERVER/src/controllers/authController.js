const User =require("../models/users");
const bcrypt =require("bcrypt");
const {encode, decode} =require("../helper/jwtTokenize")
const dotenv=require("dotenv");

dotenv.config();
class authController{
    static async creatAccount(req, res){
        try {
            const {Fullname,age,email,password}=req.body;
            // console.log("email:",email);
            const hash = await bcrypt.hashSync(password, 10);
            const checkUser = await User.findOne({email});
            req.user=checkUser
            // console.log("this:",checkUser)
            if(req.user){
                return res.status(409).json({
                    status:409,
                    error:"Email already exist"
                    
                })
            }
            else{
                const createDate = await User.create({
                 Fullname,
                 age,
                 email,
                 role:"user",
                 password:hash
                });
               return res.status(200).json({
                    status: 200,
                    message: "Account created",
                    data:createDate
                })

            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                status:500,
                message:"server problem:" + error.message
            })
            
        }
    }

    static async Login(req, res){
        try {
            const {email,password}=req.body
            const findUser = await User.findOne({email})
            req.user=findUser
            if(!findUser){
                res.status(404).json({
                    status: 404,
                    message:"Account don't exit"
                })
            }
            else{
                const dbEmail = req.user.email
                const dbPassword = req.user.password
                const dbRole= req.user.role
                const decreptedPassword = await bcrypt.compare(password, dbPassword)
                // console.log("dec",decreptedPassword)
                // console.log(dbEmail,dbPassword);
                if(dbEmail == email){
                    if(decreptedPassword){
                        const token=await encode({
                            email,
                            dbRole   
                        });
                        // const maxAge=3*24*60*60
                        // res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge *1000})
                        const decodeToken = await decode(token);
                        const role = decodeToken.dbRole
                        const emailfromtoken =decodeToken.email
                       
                       return res.status(200).json({
                            stastus: 200,
                            message: "Login succefull",
                            data:{
                                role,
                                emailfromtoken,
                                token
                            }
                        })
                    }else{
                        res.status(400).json({
                            stastus: 400,
                            message:"Wrong Password"
                        })
                    }
                }else{
                    res.status(400).json({
                        stastus: 400,
                        message:"Wrong Email"
                    })
                }
            }
            
        } catch (error) {
            res.status(500).json({
                stastus: 500,
                message:"server problem" +error.message
            })
        }
    }

    static async update(req,res){
        try {
            // const hash = await bcrypt.hashSync(password, 10);
            const userupdate = await User.findOne({ _id: req.params.id })
            
            if (req.body.Fullname) {
                userupdate.Fullname = req.body.Fullname
            }
    
            if (req.body.age) {
                userupdate.age = req.body.age
            }
            if (req.body.email) {
                userupdate.email = req.body.email
            }
            if (req.body.password) {
                userupdate.password = req.body.password
                
            }
           

            await userupdate.save()
            res.send( res.status(200).json({
                status:200,
                message:"Account Updated Successfull",
                data: userupdate
            }) 
            )
        } catch {
            res.send( res.status(404).json({
                status:404,
                error:"Account doesn't exist!",
            }) 
            )
        }
    }
}
module.exports=authController;