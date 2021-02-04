import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'
const SignUp = (props)=>{
    console.log(props)
    const [nuevoUser,setNuevoUser] = useState({
        nombre:'',apellido:'',userName:'',email:'',urlPic:'',pais:''
    })
    const [errores, setErrores] = useState([])

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
        if(nuevoUser.nombre==='' || nuevoUser.apellido==='' || nuevoUser.userName==='' || nuevoUser.email==='' || nuevoUser.urlPic==='' || nuevoUser.pais===''){
            alert('error')
            return false
        }
        setErrores([])
        const respuesta = await props.newUser(nuevoUser)
        if(respuesta && !respuesta.success){
            setErrores(respuesta.errores)
            console.log(respuesta.errores)
        }
        else {
            alert('grabado')
        }
    }
    useEffect(()=>{
        props.countries()
    },[])
    return(
        <div className="SignUp">
            <h4>Create Account</h4>
            <div className="formulario">
                <input type="text" autoComplete="nope"  name="nombre" placeholder="First Name" onChange={leerInput}/>
                <input type="text" autoComplete="nope"  name="apellido" placeholder="Last Name" onChange={leerInput}/>
                <input type="text"autoComplete="nope"  name="userName" placeholder="Username" onChange={leerInput}/>
                <input type="text" autoComplete="nope"  name="email" placeholder="Email" onChange={leerInput}/>
                <input type="text" autoComplete="nope"  name="urlPic" placeholder="Url Pic" onChange={leerInput}/>
                <select name="pais" id="" onChange={leerInput}>
                    <option value="" disabled selected>--</option>                   
                    {props.listCountries && props.listCountries.map(country =>{
                        return <option value={country.name}>{country.name}</option>
                    })}
                </select>
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
        listCountries: state.userR.countries
    }
}

const mapDispatchToProps = {
    newUser:userActions.newUser,
    countries:userActions.allCountries
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)