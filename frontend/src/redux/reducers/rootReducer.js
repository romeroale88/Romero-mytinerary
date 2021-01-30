import {combineReducers} from 'redux'
import {cityReducer} from '../reducers/cityReducer'
import {itineraryReducer} from '../reducers/itineraryReducer'

const rootReducer = combineReducers({
    cityR: cityReducer,
    itineraryR: itineraryReducer
})

export default rootReducer