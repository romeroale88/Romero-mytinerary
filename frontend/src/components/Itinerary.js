import { useState } from "react"
import Comment from './Comment'

const Itinerary = ({itinerary}) =>{
    const [visible, setVisible] = useState(false)
    
    
    return (
        <div className="itinerario">
            <div className="containerItinerary">
                <div className="userItinerary">
                    <div className="userPic" style={{backgroundImage:`url('${itinerary.userPic}')`}}>
                    </div>
                    <h5 key={itinerary.itineraryTitle}>{itinerary.userName}</h5>
                </div>
                <div className="infoItinerary">
                <h4>{itinerary.itineraryTitle}</h4>
                    <div className="detalleItineray">
                        {itinerary.likes !==0 ? 
                        <div className="likes">
                        <div style={{backgroundImage:'url("../assets/corazon1.png")', width:'24px',marginRight:'5px', height:'24px', backgroundSize:'cover'}}></div><h6>{itinerary.likes}</h6>
                        </div>
                        :
                        <div style={{backgroundImage:'url("../assets/corazon1vacio.png")', width:'24px',height:'24px', backgroundSize:'cover'}}></div>}
                        <h6>{itinerary.hours} Hours</h6>
                        <div style={{display:'flex', alignItems:'center',width:'50%'}}>Price:{[...Array(itinerary.price)].map((m,i)=>{
                            return (<div key={i} style={{backgroundImage:'url("../assets/billete.png")',margin:'0 2px',width:'2vw',height:'2vh',backgroundSize:'cover',backgroundPosition:'center'}}></div>)
                        })}</div>
                    </div>
                    <div className="hastags">
                        {itinerary.hastags.map((hastag,i) => {
                            return(<h6 key={i}>{hastag}</h6>)
                        })}
                    </div>
                </div>
            </div>
            
            {visible &&(
                <>
                <h4>Activities</h4>
                <div className="activities">
                    {itinerary.activities.length !==0 ?
                    (itinerary.activities.map(activity=>{
                        return (
                            <div key={activity._id}>
                                <div className="containerActivity">
                                    <h4>{activity.activityTitle}</h4>                                
                                    <div className="activity" style={{backgroundImage:`url(.${activity.activityImage})`}}></div>
                                </div>
                            </div>
                        )
                    })
                    ) 
                    :
                    <h4>No activities </h4>}
                </div>
                <div>
                    <h4>Comments</h4>
                    <div className="containerComment">
                        {itinerary.comments.length !==0 ?
                        (itinerary.comments.map(comment=>{
                            return <Comment key={comment._id} comment={comment}/>
                        }))                    
                            :
                        <h4>No comments</h4>}
                    </div>
                </div>
                </>
            )}
            <button onClick={()=> setVisible(!visible)}className="buttonCall">{visible ? 'View less' : 'View more'}</button>
        </div>
    )

}

export default Itinerary