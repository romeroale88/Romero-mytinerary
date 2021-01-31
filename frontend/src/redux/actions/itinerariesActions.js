const itinerariesActions = {
    getItinerary: (id) =>{
        return async(dispatch, getState) =>{
            const respuesta = await fetch('http://localhost:4000/api/itineraries/'+id)
            const data = await respuesta.json()
            dispatch({type: 'ITINERARIES', payload: data.itineraries})
        }
    }
}

export default itinerariesActions