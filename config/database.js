const mongoose = require('mongoose')
//Conexion a bse de datos
mongoose.connect('mongodb+srv://romeroAle:mongoromero@cluster0.tgjoq.mongodb.net/mytinerary?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('conexion exitosa'))
.catch(error => console.log(error))