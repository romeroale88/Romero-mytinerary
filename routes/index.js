const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')
const itineraryController = require('../controllers/itineraryController')

router.route('/cities')
.get(cityController.allCities)
.post(cityController.addCity)

router.route('/city/:id')
.get(cityController.oneCity)

router.route('/itineraries')
.post(itineraryController.addItinerary)
.get(itineraryController.allItineraries)

router.route('/itinerary/:id')
.get(cityController.cityItineraries)

module.exports = router
