import {combineReducers} from 'redux'
import {cityReducer} from '../reducers/cityReducer'
import {itineraryReducer} from '../reducers/itineraryReducer'
import {userReducer} from '../reducers/userReducer'

const rootReducer = combineReducers({
    cityR: cityReducer,
    itineraryR: itineraryReducer,
    userR: userReducer
})

export default rootReducer