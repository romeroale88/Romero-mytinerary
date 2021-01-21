import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const City = (props) =>{
    const [city, setCity] = useState({})

    useEffect(()=> {
        const id=(props.match.params.id)
        fetch(`http://localhost:4000/api/city/${id}`)
        .then(respuesta=>respuesta.json())
        .then(data => setCity(data.respuesta))
    },[])
 
    
    return (
        <div className="containerCity" >
            <div className="city" style={{
                backgroundImage:`url(".${city.cityPic}")`,
                width:'100%',
                height:'75vh',
                backgroundSize:'cover',
                backgroundPosition:'top'
            }}>
                <h3>{city.cityName}</h3>
            </div>
            <div className="volver">
                <div className="itenerarie">
                    <h4>we don't have itineraries yet!.</h4>
                </div>
                <div className="buttons">
                <Link to="/cities">
                    <h6 className="buttonCall">Back to cities</h6>
                </Link>
                <Link to="/">
                    <h6 className="buttonCall">Back to Home</h6>
                </Link>
                </div>
            </div>
        </div>
    )
}
export default City