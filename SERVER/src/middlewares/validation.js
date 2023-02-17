const Joi =require("joi");

const validation =(req, res, next)=>{
    const Schemas = Joi.object().keys({
        Fullname:Joi.string().min(5).required(),
        age:Joi.string().min(2).required(),
        email:Joi.string().email().required(),
        password:Joi.string().required().pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0123456789])(?=.*[@$!%*?&])[A-Za-z0123456789@$!%*?&]{8,}$"))

    });
    const {error}=Schemas.validate(req.body)
    if(error){
        return res.status(400).json({
            status:400,
            error:error.details[0].message
        });
    }
    next()
}
module.exports=validation;