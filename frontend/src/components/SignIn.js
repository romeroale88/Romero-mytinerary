import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'
const SignIn = (props)=>{
    console.log(props)
    const [loguear,setLoguear] = useState({
        password:'',userName:''
    })
    const [errores, setErrores] = useState([])

    const leerInput = e =>{
        const valor = e.target.value
        const campo = e.target.name
        setLoguear({
            ...loguear,
            [campo]: valor
        })
    }
    const validarUsuario = async e =>{
        e.preventDefault()
        if(loguear.userName==='' || loguear.password===''){
            alert('error')
            return false
        }
        setErrores([])
        const respuesta = await props.loginUser(loguear)
        if(respuesta && !respuesta.success){
            setErrores(respuesta.errores)
            console.log(respuesta.errores)
        }
        else {
            alert('bienvenido')
        }
    }
    return(
        <div className="SignUp">
            <h4>Create Account</h4>
            <div className="formulario">
                <input type="text"autoComplete="nope"  name="userName" placeholder="Username" onChange={leerInput}/>
                <input type="text" autoComplete="nope" name="password" placeholder="Password" onChange={leerInput}/>
            </div>
            <button onClick={validarUsuario}>Create</button>
            <div>
                {errores.map(error => <p>{error}</p>)}
            </div>
        </div>
    )
    
}
const mapStateToProps = state=>{
    return {
        loggedUser:state.userR.loggedUser,
    }
}

const mapDispatchToProps = {
    loginUser:userActions.loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)