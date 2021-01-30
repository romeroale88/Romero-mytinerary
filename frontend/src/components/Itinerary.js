const Itinerary = ({itinerary}) =>{
    
    return (
        <div className="itinerario">
            <h4>{itinerary.itineraryTitle}</h4>
            <div className="containerItinerary">
                <div className="userItinerary">
                    <div className="userPic" style={{backgroundImage:`url('${itinerary.userPic}')`}}>
                    </div>
                    <h5>{itinerary.userName}</h5>
                </div>
                <div className="infoItinerary">
                    <div className="detalleItineray">
                        {itinerary.likes !==0 ? 
                        <div className="likes">
                        <div style={{backgroundImage:'url("../assets/corazonlleno.png")', width:'20px', backgroundSize:'cover'}}></div><h6>{itinerary.likes}</h6>
                        </div>
                        :
                        <div style={{backgroundImage:'url("../assets/corazonvacio.png")', width:'20px', backgroundSize:'cover'}}></div>}
                        <h6>{itinerary.hours} Hours</h6>
                        <h6>{itinerary.price}</h6>
                    </div>
                    <div className="hastags">
                        {itinerary.hastags.map(hastag => {
                            return(<h6>{hastag}</h6>)
                        })}

                    </div>
                </div>

            </div>

        </div>
    )

}

export default Itinerary