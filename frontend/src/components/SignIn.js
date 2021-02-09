import React, {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const SignIn = (props)=>{
    const [loguear,setLoguear] = useState({
        userName:'', password:''
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
        console.log(loguear)
        if(loguear.userName==='' || loguear.password===''){
            alert('error')
            return false
        }
        setErrores([])
        const respuesta = await props.loginUser(loguear)
        if(respuesta && !respuesta.success){
            setErrores([respuesta.mensaje])
            console.log(respuesta.errores)
        }
        else {
            const MySwal = withReactContent(Swal)

            MySwal.fire({
            title: <p className="popup">Bienvenido {loguear.userName}</p>,
            icon:'success',
            toast: true,
            timer:2000,
            timerProgressBar:true,
            showConfirmButton:false,
            width:'30vw',                        
            })
            setTimeout(() => {
                props.history.push('/')    
            }, 2000);
            
        }

    }
    return(
        <div className="SignUp">
            <h4>Sign In</h4>
            <div className="formulario">
                <input type="text"autoComplete="nope"  name="userName" placeholder="Username" onChange={leerInput}/>
                <input type="password" autoComplete="nope" name="password" placeholder="Password" onChange={leerInput}/>
            </div>
            <button onClick={validarUsuario}>Validar</button>
            <div className="error">
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