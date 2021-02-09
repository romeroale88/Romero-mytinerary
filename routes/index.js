const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')
const itineraryController = require('../controllers/itineraryController')
const userController = require('../controllers/userController')
const commentController = require('../controllers/commentController')
const validator = require('../controllers/validator')
const passport = require('passport')
require('../config/passport')


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

router.route('/user/ls')
.post(passport.authenticate('jwt', {session: false}), userController.logFromLS)

router.route('/comments')
.post(commentController.addComment)
.put(commentController.modifComment)


router.route('/comments/delete')
.put(commentController.deleteComment)

module.exports = router
