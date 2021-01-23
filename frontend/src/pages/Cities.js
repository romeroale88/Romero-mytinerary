
import React, {useEffect, useState} from 'react'
import City from '../components/City'
import Loading from '../components/Loading'

const Cities = () =>{

    const [cities, setCities] = useState([])
    const [valor, setValor] = useState("")
    const [search, setSearch] = useState([])
    const [loading, setLoading] = useState(true)
    // Se fetchea las ciudades
    useEffect(()=> {
        window.scrollTo(0, 0);
        fetch('http://localhost:4000/api/cities')
        .then(response => response.json())
        .then(data => {setCities(data.respuesta)
                        setSearch(data.respuesta)
                        setLoading(false)})
    },[])
    
    // Buscador aplicando indexOf utilzando indice 0 para encontrar incidencia en primera posicion 
    useEffect(()=>{
        setSearch(cities.filter(city => city.cityName.toUpperCase().indexOf(valor.toUpperCase().trim())===0))
    },[valor])
    if(loading){
        return <Loading />
    }
    return(
        

        <div className="buscador">
            <h2>Cities</h2>
            <input onChange={(e)=>setValor(e.target.value)} type="text" placeholder="Search City"/>
            <div className="containerCities">
                {search.length !==0 && !loading ?
                search.map(({cityPic,cityName,_id})=>{                  
                    return (
                        <City key={cityName} cityPic={cityPic} cityName={cityName} _id={_id} />
                        )
                    })
                    :
                    <div className="noFound">
                        <h4>No cities found</h4>
                    </div>
                }
            </div>
        </div>
    )
}
export default Cities