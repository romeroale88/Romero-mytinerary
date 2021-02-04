const mongoose = require('mongoose')

const userSquema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    email:String,
    userName:String,
    password:String,
    urlPic:String,
    pais:String
})

const User = mongoose.model('user', userSquema)

module.exports = User