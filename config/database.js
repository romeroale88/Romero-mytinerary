const mongoose = require('mongoose')
//Conexion a bse de datos
mongoose.connect(process.env.MONGODB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('conexion exitosa'))
.catch(error => console.log(error))

