const Itinerary = require('../models/Itinerary')
const User = require('../models/User')


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
        .catch(error => res.json({success: false, error: error}))
    },
    like: (req, res)=>{
        const idItinerary = req.body.idItinerary
        const user = req.user._id

        Itinerary.findOneAndUpdate({_id: idItinerary},{$addToSet:{likes:user}},{new:true})
        .then(user => {
            return res.json({success: true, respuesta: user.likes})
  
        })
        
        .catch(error => {
            return res.json({success: false, error: error})
        })
        
    },
    dislike:(req, res)=>{
        const idItinerary = req.body.idItinerary
        const user = req.user._id
        
        Itinerary.findOneAndUpdate({_id:idItinerary},{$pull:{likes:user}},{new: true})
        .then(user =>{
            return res.json({success:true, respuesta: user})
        })
        .catch(err =>{
            return res.json({success: false, error: err})
        })
    }
}



module.exports = itineraryController