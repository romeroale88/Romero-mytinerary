const initialState = {
    loggedUser:null,
    countries:[],
}

export function userReducer (state = initialState,action){
    switch (action.type){
        case 'LOG_USER':
            return {
                ...state,
                loggedUser: action.payload.response
            }
        case 'COUNTRY_SELECT':
            return {
                ...state,
                countries: action.payload
            }
        case 'LOG_OUT_USER':
            return{
                ...state,
                loggedUser:null
            }
        default:
            return state
    }
}
