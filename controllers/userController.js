const User = require('../models/User')
const bcryptjs = require('bcryptjs')

const userController = {
    signUp: async (req, res) =>{
        var errores=[]
        const {nombre,apellido,email,userName,password,urlPic,pais} = req.body
        if(nombre ==='' || apellido ==='' || userName === '' || password ==='' || urlPic === '' || pais==='' || email===''){
            errores.push('Todos los campos son requeridos')
        }
        const userExists = await User.findOne({userName: userName})
        if(userExists){
            errores.push('el usuario es incorrecto')
        }
        if(errores.length === 0){ 
            const passwordHash = bcryptjs.hashSync(password,10)
            const newUser = new User ({
                userName,password:passwordHash,nombre,apellido,email,pais
            })
            var newUserSaved = await newUser.save()            
        }
        return res.json({success:errores.length === 0 ? true: false,
                        errores: errores,
                        response: newUserSaved})
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
        return res.json({success: true, response: userExists})
    }
}

module.exports = userController