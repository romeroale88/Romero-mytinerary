
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
                    minHeight:'85vh',
                    marginTop:'10vh',
                    width:'100%',
                }}>
                    {
                        cities.map(({imagen,titulo,_id})=>{                          
                            return (
                                <>
                                <div>
                                    <Link to={`/city/${_id}`}><div className="imagenCity" style={{
                                        backgroundImage:`url('${imagen}')`,
                                        width:' 60vw',
                                        height: '50vh',
                                        backgroundSize:'cover'
                                    }}>
                                        <h3 key={_id}>{titulo}</h3>
                                    </div></Link>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
        </div>
        
    )
}
export default Cities