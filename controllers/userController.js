const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
    signUp: async (req, res) =>{
        var errores=[]
        // const {nombre,apellido,email,userName,password,urlPic,pais,itineraryLike} = req.body
        const {nombre, apellido,email,password}=req.body
        // const userExists = await User.findOne({userName: userName})
        const userExists = await User.findOne({email: email})
        if(userExists){
            errores.push('el usuario es esta siendo usado.elija otro')
        }
        if(errores.length === 0){ 
            const passwordHash = bcryptjs.hashSync(password,10)
            
            var newUser = new User ({
                // userName,password:passwordHash,nombre,apellido,email,pais,urlPic,itineraryLike
                nombre,apellido,email,password:passwordHash
            })
            var newUserSaved = await newUser.save()
            console.log(newUser)
            var token = jwt.sign({...newUserSaved}, process.env.SECRET_KEY,{})
            
        }
        return res.json({success:errores.length === 0 ? true: false,
                        errores: errores,
                        // response: {token, userName:newUserSaved.userName,urlPic: newUserSaved.urlPic,idUser:newUserSaved._id }})
                        response:{token, nombre: newUserSaved.nombre,email: newUserSaved.email, idUser: newUserSaved._id}})
                        
    },
    
    singIn:async (req, res) =>{
        // const {userName, password} = req.body
        const {email, password} = req.body
        // const userExists = await User.findOne({userName: userName})
        const userExists = await User.findOne({email: email})
        if (!userExists){
            return res.json({success: false, mensaje: 'The wrong username and / or password'})
        }
        const passwordComp = bcryptjs.compareSync(password, userExists.password)
        if(!passwordComp){
            return res.json({success: false, mensaje:'The wrong username and / or password'})
        }
        var token = jwt.sign({...userExists},process.env.SECRET_KEY,{})        
        // return res.json({success: true, response: {token,userName:userExists.nombre,urlPic:userExists.urlPic,idUser:userExists._id}})
        return res.json({success: true, response: {token,email:userExists.email,idUser:userExists._id,nombre:userExists.nombre}})
    },
    
    logFromLS: async(req, res) =>{
        res.json({success: true, response: {token: req.body.token,userName:req.user.nombre,urlPic:req.user.urlPic}})
    }

}

module.exports = userController