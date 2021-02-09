import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'
import { GoogleLogin } from 'react-google-login';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const SignUp = (props)=>{
    console.log(props)
    const [nuevoUser,setNuevoUser] = useState({
        nombre:'',apellido:'',userName:'',email:'',urlPic:'',pais:''
    })
    const [error, setError] = useState({})
    const [errores, setErrores] = useState([])
    console.log(nuevoUser)
    const leerInput = e =>{
        const valor = e.target.value
        const campo = e.target.name
        setNuevoUser({
            ...nuevoUser,
            [campo]: valor
        })
    }
    const validarUsuario = async e =>{
        e.preventDefault()
        // if(nuevoUser.nombre==='' || nuevoUser.apellido==='' || nuevoUser.userName==='' || nuevoUser.email==='' || nuevoUser.urlPic==='' || nuevoUser.pais===''){
        //     alert('error')
        //     return false
        // }
        // setErrores([])
        const respuesta = await props.newUser(nuevoUser)
        if(respuesta && !respuesta.success){
            console.log(respuesta)
            const arrayErrores = respuesta.errores.details                 
            const erroresObj ={
                nombre:null,apellido:null,userName:null,email:null,password:null,urlPic:null,pais:null
            }
            arrayErrores && arrayErrores.map(error =>{
                erroresObj[error.context.label] = error.message
                return false
            })
            setError(erroresObj)
            setErrores(respuesta.errores)
            console.log(errores)
        }
        else {
            alert('grabado')
            props.history.push('/')
        }
        
    }
    useEffect(()=>{
        props.countries()
    },[])
    const responseGoogle = async (response) => {
        console.log(response)
        if(response.error){
            const MySwal = withReactContent(Swal)

            MySwal.fire({
            title: <p className="popup">Error </p>,
            icon:'error',
            toast: true,
            timer:2000,
            timerProgressBar:true,
            showConfirmButton:false,
            width:'30vw',                        
            })
        }else {
            const respuesta = await props.newUser({
                userName: response.profileObj.email,
                password: response.profileObj.googleId,
                nombre: response.profileObj.givenName,
                apellido: response.profileObj.familyName
            })
            if(respuesta && !respuesta.success){
                console.log(respuesta)
                const arrayErrores = respuesta.errores.details                 
                const erroresObj ={
                    nombre:null,apellido:null,userName:null,email:null,password:null,urlPic:null,pais:null
                }
                arrayErrores && arrayErrores.map(error =>{
                    erroresObj[error.context.label] = error.message
                    return false
                })
                setError(erroresObj)
                setErrores(respuesta.errores)
                console.log(errores)
            }
            else {
                alert('grabado')
                props.history.push('/')
            }
        }
        
      }
    
    return(
        <div className="SignUp">
            <h4>Create Account</h4>
            <div className="formulario">
                <input type="text" autoComplete="nope"  name="nombre" placeholder="First Name" onChange={leerInput}/>
                {error.nombre && <p className="error">{error.nombre}</p>}
                <input type="text" autoComplete="nope"  name="apellido" placeholder="Last Name" onChange={leerInput}/>
                {error.apellido && <p className="error">{error.apellido}</p>}
                <input type="text"autoComplete="nope"  name="userName" placeholder="Username" onChange={leerInput}/>
                {error.userName && <p className="error">{error.userName}</p>}
                <input type="text" autoComplete="nope"  name="email" placeholder="Email" onChange={leerInput}/>
                {error.email && <p className="error">{error.email}</p>}
                <input type="text" autoComplete="nope"  name="urlPic" placeholder="Url Pic" onChange={leerInput}/>
                {error.urlPic && <p className="error">{error.urlPic}</p>}
                <select name="pais" id="" onChange={leerInput}>
                    <option value="" disabled selected>--</option>                   
                    {props.listCountries && props.listCountries.map(country =>{
                        return <option value={country.name}>{country.name}</option>
                    })}
                </select>
                <input type="text" autoComplete="nope" name="password" placeholder="Password" onChange={leerInput}/>
                {error.password && <p className="error">{error.password}</p>}
            </div>
            <button onClick={validarUsuario}>Create</button>
            <GoogleLogin
                clientId="516285407423-qqvg7pnoibihom6j5rurfub6ma5b5l70.apps.googleusercontent.com"
                buttonText="Create Account with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            {/* <div className="error">
                {errores && errores.map(error => <p>{error}</p>)}
            </div> */}
        </div>
    )
    
}
const mapStateToProps = state=>{
    return {
        loggedUser:state.userR.loggedUser,
        listCountries: state.userR.countries
    }
}

const mapDispatchToProps = {
    newUser:userActions.newUser,
    countries:userActions.allCountries
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)