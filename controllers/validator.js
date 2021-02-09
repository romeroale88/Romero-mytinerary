const Joi = require('joi')
const validator = {
    validar: (req, res, next) =>{
        const schema = Joi.object({
            userName: Joi.string().trim().required().messages({'string.empty':'Username cannot be empty'}),
            nombre: Joi.string().trim().required().messages({'string.empty':'First name cannot be empty'}),
            apellido:Joi.string().trim().required().messages({'string.empty':'Last name cannot be empty'}),
            email:Joi.string().trim().email({ tlds: {allow: false} }).messages({'string.email':'email invalid','string.empty': 'email cannot be empty'}),
            urlPic:Joi.string().trim().uri().required().messages({'string.uri': 'url valid','string.empty':'UrlPic cannot be empty'}),
            pais:Joi.string().required(),
            password:Joi.string().trim().required().pattern(/(?=.*\d)/).min(6).messages({'string.pattern.base': 'password min 5','any.required': 'Password cannot be empty'}),
            
        })

        const validation = schema.validate(req.body,{abortEarly:false})

        // console.log(validation.error.details)
        
        if(!validation.error){
            next()
        }else {
            res.json({success: false, errores: validation.error})
        }
    }
}
module.exports = validator