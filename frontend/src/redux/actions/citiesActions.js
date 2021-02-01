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
    oneCity:(id) =>{
        return async(dispatch, getState) =>{
            const respuesta = await fetch(`http://localhost:4000/api/city/${id}`)
            const data = await respuesta.json()
            dispatch({type: 'CARGAR_CITY', payload: data.respuesta})
        }
    }
}

export default citiesActions
