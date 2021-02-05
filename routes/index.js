const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')
const itineraryController = require('../controllers/itineraryController')
const userController = require('../controllers/userController')
const validator = require('../controllers/validator')


router.route('/cities')
.get(cityController.allCities)
.post(cityController.addCity)

router.route('/city/:id')
.get(cityController.oneCity)

router.route('/itineraries')
.post(itineraryController.addItinerary)
.get(itineraryController.allItineraries)

router.route('/itineraries/:id')
.get(cityController.cityItineraries)

router.route('/itinerary/:id')
.get(itineraryController.oneItinerary)
.put(itineraryController.modifItinerary)

router.route('/user/signup')
.post(validator.validar,userController.signUp)

router.route('/user/signin')
.post(userController.singIn)



module.exports = router
