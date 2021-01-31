const City = require('../models/City')
const Itinerary = require('../models/Itinerary')

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
    },
    cityItineraries: async (req, res) =>{
        const {id} = req.params
        const itineraries = await Itinerary.find({idCity:id}).populate('idCity')
        City.find({_id: id})
        .then (()=> res.json({success: true, itineraries}))
        .catch(error => res.json({success: false, error}))
        
    }
}

module.exports = cityController