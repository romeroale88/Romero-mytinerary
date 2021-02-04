import axios from 'axios'

const userActions = {
    allCountries: ()=>{
        return async (dispatch, getstate) =>{
            const respuesta = await fetch('https://restcountries.eu/rest/v2/all')
            const data = await respuesta.json()
            dispatch({type: 'COUNTRY_SELECT', payload: data})
         
        }
    },
    newUser: (newUser)=>{
        return async(dispatch, getState)=>{
            const respuesta = await axios.post('http://localhost:4000/api/user/signup',newUser)
            if(!respuesta.data.success){
                return respuesta.data
            }
            dispatch({type: 'LOG_USER',payload: respuesta.data})
            console.log(respuesta)
        }
    },
    logoutUser: () =>{
        return (dispatch, getState) =>{
            dispatch({type: 'LOG_OUT_USER'})
        }
    },
    loginUser: (user)=>{
        return async (dispatch, getState) =>{
            const respuesta = await axios.post('http://localhosta:4000/signin',user)
            if(!respuesta.data.success){
                return respuesta.data
            }
            dispatch({type: 'LOG_USER', payload: respuesta.data})
        }
    }
}
export default userActions