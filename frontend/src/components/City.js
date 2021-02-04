import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Itinerary from './Itinerary'
import itinerariesActions from '../redux/actions/itinerariesActions'
import citiesActions from '../redux/actions/citiesActions'


const City = (props) =>{
    const [city, setCity] = useState({})
    useEffect(()=> {
        window.scrollTo(0, 0)
        const id=(props.match.params.id)
        const city = props.cities.filter(city => city._id ===id)
        setCity(city[0])
        props.listItineraries(id)
        if(city.length===0){
            return props.history.push('/cities')
        }
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
        itineraries: state.itineraryR.itineraries,
        city: state.cityR.city
    }
}
const mapDispatchToProps = {
    listItineraries: itinerariesActions.getItinerary,
    oneCity: citiesActions.oneCity
}
export default connect(mapStateToProps,mapDispatchToProps)(City)