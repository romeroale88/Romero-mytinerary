const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
    signUp: async (req, res) =>{
        var errores=[]
        const {nombre,apellido,email,userName,password,urlPic,pais} = req.body
        const userExists = await User.findOne({userName: userName})
        if(userExists){
            errores.push('el usuario es esta siendo usado.elija otro')
        }
        if(errores.length === 0){ 
            const passwordHash = bcryptjs.hashSync(password,10)
            
            var newUser = new User ({
                userName,password:passwordHash,nombre,apellido,email,pais,urlPic
            })
            var newUserSaved = await newUser.save()
            
            var token = jwt.sign({...newUserSaved}, process.env.SECRET_KEY,{})
            console.log(token)
        }
        return res.json({success:errores.length === 0 ? true: false,
                        errores: errores,
                        response: token})
    },
    singIn:async (req, res) =>{
        const {userName, password} = req.body
        const userExists = await User.findOne({userName: userName})
        if (!userExists){
            return res.json({success: false, mensaje: 'el usuario y/o contraseña incorrectos'})
        }
        const passwordComp = bcryptjs.compareSync(password, userExists.password)
        if(!passwordComp){
            return res.json({success: false, mensaje:'el usuario y/o contraseña incorrectos'})
        }
        var token = jwt.sign({...userExists},process.env.SECRET_KEY,{})

        return res.json({success: true, response: {token,userName:userExists.userName,urlPic:userExists.urlPic}})
    },
    logFromLS: (req, res) =>{
        
    }

}

module.exports = userController