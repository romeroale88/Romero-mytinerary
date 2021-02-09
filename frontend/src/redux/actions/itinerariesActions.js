import axios from 'axios'
const itinerariesActions = {
    getItinerary: (id) =>{
        return async(dispatch, getState) =>{
            const respuesta = await fetch('http://localhost:4000/api/itineraries/'+id)
            const data = await respuesta.json()
            dispatch({type: 'ITINERARIES', payload: data.itineraries})
        }
    },
    addComment:(value, id,username,url)=>{
        return async(dispatch, getState) =>{
            const respuesta = await axios.post('http://localhost:4000/api/comments',{value, id,username,url})
            dispatch({type: 'ADD_COMMENT', payload:respuesta.config.data})
        }
    },
    deleteComment:(id,idComment) =>{
        return async(dispatch,getState) =>{
            const respuesta = await axios.put('http://localhost:4000/api/comments/delete',{id,idComment})
            dispatch({type: 'DELETE_COMMENT', payload:respuesta.config.data})
        }
    },
    // modifComment:(id, idComment)=>{
    //     return async(dispatch, getState) =>{
    //         const respuesta = await axios.put('http://localhost:4000/api/comments',{id,idComment})
    //         console.log(respuesta)
    //         dispatch({type: 'ADD_COMMENT', payload:respuesta.config.data})
    //     }
    // }
}   

export default itinerariesActions