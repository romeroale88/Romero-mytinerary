const Itinerary = require('../models/Itinerary')


const itineraryController = {
    addItinerary: (req, res) =>{
        const {idCity,itineraryTitle,userPic,userName,likes,hours,price,hastags,activities,comments} = req.body
        const itineraryGuardar = new Itinerary({
            idCity,itineraryTitle,userPic,userName,likes,hours,price,hastags,activities,comments             
        })
        itineraryGuardar.save()
        .then(async itineraryGuardar => {
            const elItinerary = await itineraryGuardar.populate('idCity').execPopulate()
            res.json({success: true, respuesta: elItinerary})
        })
        .catch(error =>{
            return res.json({success:false, error:error})
        })    
    },

    allItineraries:(req, res) =>{
        Itinerary.find()
        .then(data => {
            return res.json({success: true, respuesta: data})
        })
       .catch(error => {
           return res.json({success: false, error: error})
       })
    },
    oneItinerary:(req, res) =>{
        const id = (req.params.id)
        Itinerary.findOne({_id:id})
        .then(data => {
            return res.json({success: true, respuesta: data})
        })
        .catch(error => {
            return res.json({success: false, error: error})
        })
    },
    modifItinerary:(req, res) =>{
        const id = req.params.id
        const {idCity,itineraryTitle,userPic,userName,likes,hours,price,hastags,activities,comments} = req.body
        Itinerary.findOneAndUpdate({_id:id}, {idCity,itineraryTitle,userPic,userName,likes,hours,price,hastags,activities,comments},{new: true})
        .then(itineraryModif => res.json({success:true, respuesta: itineraryModif}))
        .catch(error => res.json({success: true, error: error}))
    }
}


module.exports = itineraryController