const initialState ={
    itineraries:[],
    comment:'',

}
export function itineraryReducer (state = initialState,action){
    switch(action.type) {
        case 'ITINERARIES':
            return {
                ...state,
                itineraries: action.payload,
            }
        case 'ADD_COMMENT':
            return{
                ...state,
                comment: action.payload            
            }
        case 'DELETE_COMMENT':
            return {
                ...state            }
        default:
            return state
    }
}
