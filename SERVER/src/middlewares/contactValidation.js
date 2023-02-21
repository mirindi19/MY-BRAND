const Joi =require("joi");

const Contactvalidation =(req, res, next)=>{
    const Schemas = Joi.object().keys({
        name:Joi.string().min(5).required(),
        email:Joi.string().email().required(),
        address:Joi.string().min(3).required(),
        message:Joi.string().min(5).required(),
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
module.exports=Contactvalidation;