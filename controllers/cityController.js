const City = require('../models/City')

// const data = [
//     {imagen:'./assets/Berlin.jpg', titulo:'Berlin',_id:1},
//     {imagen:'./assets/México.jpg', titulo:'México',_id:2},
//     {imagen:'./assets/New York.jpg', titulo:'New York',_id:3},
//     {imagen:'./assets/Hawaii.jpg', titulo:'Hawaii',_id:4},
//     {imagen:'./assets/Paris.jpg', titulo:'Paris',_id:5},
//     {imagen:'./assets/Rome.jpg', titulo:'Rome',_id:6},
//     {imagen:'./assets/Rio de Janeiro.jpg', titulo:'Rio de Janeiro',_id:7},
//     {imagen:'./assets/Bora Bora.jpg', titulo:'Bora Bora',_id:8},
//     {imagen:'./assets/Istanbul.jpg', titulo:'Bruges',_id:9},
//     {imagen:'./assets/Egypt.jpg', titulo:'Guiza',_id:10},
//     {imagen:'./assets/Venice.jpg', titulo:'Venice',_id:11},
//     {imagen:'./assets/San Carlos de Bariloche.jpg', titulo:'San Carlos de Bariloche',_id:12},
//     {imagen:'./assets/Sydney.jpg', titulo:'Sydney',_id:13},
//     {imagen:'./assets/Ciudad del Cabo.jpg', titulo:'Cape Town', _id:14},
//     {imagen:'./assets/Florencia.jpg', titulo:'Florence', _id:15}
// ]

const cityController = {
    addCity: (req, res) => {
        const cityGuardar = new City({
            cityName: req.body.cityName,
            cityPic: req.body.cityPic
        })
        cityGuardar.save()
        .then(cityGuardar => {
            return res.json({success:true, respuesta:cityGuardar})
        })
        .catch(error =>{
            return res.json({success:false, error:error})
        })
    }, 

    allCities: (req, res) => {

        City.find()
        .then(data => {
            return res.json({success: true, respuesta: data})
        })
       .catch(error => {
           return res.json({success: false, error: error})
       })

        // Devolver al frontend la lista de ciudades
        // PEDIRLE A LA BASE DE DATOS TODAS LAS CIUDADES, ESA INFORMACION LA VA A GUARDAR EN UN
        // VARIABLE LLAMADA DATA
        // res.json({
        //     respuesta: data
        // })
    },
    oneCity: (req, res) => {
        // Devolver al frontend sola la ciudad que me piden (por ID)
        const id = (req.params.id)
        City.findOne({_id:id})
        .then(data => {
            return res.json({success: true, respuesta: data})
        })
        .catch(error => {
            return res.json({success: false, error: error})
        })
        // data.map(city => {
        //     if (city._id === id) {
        //         res.json({
        //             respuesta: city
        //         })
        //     }
        // })
    }
}

module.exports = cityController