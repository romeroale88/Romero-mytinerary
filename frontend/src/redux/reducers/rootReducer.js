import {combineReducers} from 'redux'
import {cityReducer} from '../reducers/cityReducer'

const rootReducer = combineReducers({
    cityR: cityReducer
})

export default rootReducer