
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
const Cities = () =>{
    const [cities, setCities] = useState([])
    
    useEffect(()=> {
        fetch('http://localhost:4000/api/cities')
        .then(response => response.json())
        .then(data => setCities(data.respuesta))
    },[])
    return(
        <div className="buscador">
            <h2>Cities</h2>
            <input type="text" placeholder="Search city"/>
            <div className="containerCities" style={{
                    marginTop:'10vh',
                }}>
                {
                cities.map(({cityPic,cityName,_id})=>{                     
                    return (
                        <>
                            <Link to={`/city/${_id}`}><div  className="imagenCity" style={{
                                backgroundImage:`url('${cityPic}')`,
                                width:'60vw',
                                height:'50vh',
                                backgroundSize:'cover'
                            }}>
                                <h3>{cityName}</h3>
                            </div></Link>                                
                        </>
                        )
                    })
                }
            </div>
        </div>
        
    )
}
export default Cities