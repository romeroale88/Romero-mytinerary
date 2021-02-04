const initialState ={
    itineraries:[],
}
export function itineraryReducer (state = initialState,action){
    switch(action.type) {
        case 'ITINERARIES':
            return {
                ...state,
                itineraries: action.payload,
            }
        default:
            return state
    }
}
