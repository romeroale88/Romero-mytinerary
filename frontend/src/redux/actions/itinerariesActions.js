import axios from 'axios'
const itinerariesActions = {
    getItinerary: (id) =>{
        return async(dispatch, getState) =>{
            const respuesta = await fetch('http://localhost:4000/api/itineraries/'+id)
            const data = await respuesta.json()
            dispatch({type: 'ITINERARIES', payload: data.itineraries})
        }
    },
    addComment:(value, id,token)=>{
        return async(dispatch, getState) =>{
            const respuesta = await axios.post('http://localhost:4000/api/comments',{value, id,token},{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(respuesta.config)
            dispatch({type: 'ADD_COMMENT', payload:respuesta.config.data})
            
        }
    },
    deleteComment:(id,idComment,token) =>{
        return async(dispatch,getState) =>{
            const respuesta = await axios.put('http://localhost:4000/api/comments/delete',{id,idComment,token},{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch({type: 'DELETE_COMMENT', payload:respuesta.config.data})
        }
    },
    modifComment:(value, idComment)=>{
        
        return async(dispatch, getState) =>{
            const respuesta = await axios.put('http://localhost:4000/api/comments',{idComment,value},)
            dispatch({type: 'ADD_COMMENT', payload:respuesta.config.data})
        }
    },
    like:(idItinerary,token)=>{
        return async(dispatch, getState) =>{
            const respuesta = await axios.post('http://localhost:4000/api/like', {idItinerary, token},{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(respuesta)
        }
    },
    dislike:(idItinerary,token)=>{
        return async(dispatch, getState) =>{
            const respuesta = await axios.post('http://localhost:4000/api/dislike', {idItinerary, token},{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
        }
    }
}   

export default itinerariesActions