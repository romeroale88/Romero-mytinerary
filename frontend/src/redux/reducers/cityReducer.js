const initialState = {
    cities: [],
    city:{},
    searchCities:[],
    loading: true
}
export function cityReducer (state = initialState,action){
    switch (action.type){
        case 'CARGAR_CITIES':
            return {
                ...state,
                cities: action.payload,
                searchCities: action.payload,
                loading: false
            }
        case 'SEARCH':
            return {
                ...state,
                   // Buscador aplicando indexOf utilzando indice 0 para encontrar incidencia en primera posicion 
                searchCities: state.cities.filter(city => city.cityName.toUpperCase().indexOf(action.payload.toUpperCase().trim())===0)
            }
        case 'CARGAR_CITY':
            return{
                ...state,
                city: action.payload
            }
        default: 
            return state

    }
}
