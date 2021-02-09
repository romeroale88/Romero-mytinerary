const initialState = {
    loggedUser:null,
    countries:[],
}

export function userReducer (state = initialState,action){
    switch (action.type){
        case 'LOG_USER':
            localStorage.setItem('userName',action.payload.response.userName)
            localStorage.setItem('urlPic',action.payload.response.urlPic)
            localStorage.setItem('token',action.payload.response.token)
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
            localStorage.clear()
            return{
                ...state,
                loggedUser:null
            }
        default:
            return state
    }
}
