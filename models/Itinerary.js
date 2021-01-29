const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({

    itineraryTitle: {type: String, required: true},
    userPic: {type: String, required: true},
    userName: {type: String, required: true},
    likes: {type: Number, default: 0},
    hours: {type: Number, required: true},
    price: {type: Number, required: true},
    hastags:[{type: String, required: true}],
    activities:[
        {
            activityImage:{type: String},
            activityTitle:{type: String},    
        },
    ],
    comments:[
        {
            userPic:{type: String},
            userName:{type: String},
            comment:{type: String}
        }
    ],
    idCity:{type: mongoose.Schema.ObjectId, ref: 'city'} 
})


const Itinerary = mongoose.model('itinerary',itinerarySchema)

module.exports = Itinerary