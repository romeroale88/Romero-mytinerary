const citiesActions = {
    getCities: () =>{
        return async(dispatch, getState) =>{
            const respuesta = await fetch('http://localhost:4000/api/cities')
            const data = await respuesta.json()
            dispatch({type: 'CARGAR_CITIES', payload: data.respuesta})  
        }
    },
    search: (valor) =>{
        return async(dispatch, getState) =>{
            dispatch({type: 'SEARCH', payload: valor})
            
        }
    },
}

export default citiesActions
