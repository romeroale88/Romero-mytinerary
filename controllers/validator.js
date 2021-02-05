const Joi = require('joi')
const validator = {
    validar: (req, res, next) =>{
        const schema = Joi.object({
            userName: Joi.string().trim().required(),
            nombre: Joi.string().trim().required(),
            apellido:Joi.string().trim().required(),
            email:Joi.string().trim().email({ tlds: {allow: false} }).messages({'string.email':'email invalid'}),
            urlPic:Joi.string().trim().uri().required().messages({'string.uri': 'url valid'}),
            pais:Joi.string().required(),
            password:Joi.string().trim().required().pattern(/(?=.*\d)/).min(6).messages({'string.pattern.base': 'password min 5'}),
            
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