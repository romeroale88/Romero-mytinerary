
import React, {useEffect, useState} from 'react'
import City from '../components/City'
import Loading from '../components/Loading'
import { connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import {Link} from 'react-router-dom'

const Cities = (props) =>{
    
    const [loading, setLoading] = useState(true)
    // Se fetchea las ciudades
    useEffect(()=> {
        window.scrollTo(0, 0);
        props.addCities()   
    },[])
    // if(loading){
    //     return <Loading />
    // }

    return(
        <div className="buscador">
            <h2>Cities</h2>
            <input onChange={(e)=>props.search(e.target.value)} type="text" placeholder="Search City"/>
            <div className="containerCities">
                {props.searchCities.length !==0  ?
                props.searchCities.map(({cityPic,cityName,_id})=>{                  
                    return (
                        <Link key={_id} to={`/city/${_id}`}>
                            <div className="imagenCity" style={{
                            backgroundImage:`url('${cityPic}')`,
                            width:'60vw',
                            height:'50vh',
                            backgroundSize:'cover'
                        }}>
                            <h3 >{cityName}</h3>
                            </div>
                        </Link>
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
const mapStateToProps = state =>{
    return{
        listCitites: state.cityR.cities,
        searchCities: state.cityR.searchCities
    }
}
const mapDispatchToProps = {
    addCities: citiesActions.getCities,
    search: citiesActions.search
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)