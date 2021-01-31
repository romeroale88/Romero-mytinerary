import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Loading from './Loading'
import {connect} from 'react-redux'
import Itinerary from './Itinerary'
import itinerariesActions from '../redux/actions/itinerariesActions'


const City = (props) =>{
    const [city, setCity] = useState({})
    const [loading, setLoading] = useState(true)
    // se fetchea cada una de las ciudades por id
    useEffect(()=> {
        window.scrollTo(0, 0)
        const id=(props.match.params.id)
        const city = props.cities.filter(city => city._id ===id)
        setCity(city[0])
        props.listItineraries(id)  
    },[])
    return (
        
        <div className="containerCity" >
            <div className="city" style={{
                backgroundImage:`url(".${city.cityPic}")`
            }}>
                <h3>{city.cityName}</h3>
            </div>
            <div className="itineraries">
                {props.itineraries.length !==0 ?
                props.itineraries.map(itinerary =>{
                    return <Itinerary key={itinerary._id} itinerary={itinerary}/>
                }):
                <div className="noFound">
                    <h4>We don't have itineraries yet!</h4>
                </div>
                }
                <div className="buttons">
                    <Link to="/cities">
                        <h6 className="buttonCall">Back to Cities</h6>
                    </Link>
                    <Link to="/">
                        <h6 className="buttonCall">Back to Home</h6>
                    </Link>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state=>{
    return {
        cities: state.cityR.cities,
        itineraries: state.itineraryR.itineraries
    }
}
const mapDispatchToProps = {
    listItineraries: itinerariesActions.getItinerary

}
export default connect(mapStateToProps,mapDispatchToProps)(City)