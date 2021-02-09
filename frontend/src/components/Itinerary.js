import { connect } from "react-redux"
import { useState, useEffect } from "react"
import Comment from './Comment'
import itinerariesActions from '../redux/actions/itinerariesActions'



const Itinerary = (props) =>{
    const [visible, setVisible] = useState(false)
    const [like, setLike] = useState(false)
    const [value, setValue] = useState('')

    const comment = e =>{
        setValue(e.target.value)
    }
    const enviar = async (e) =>{
        // e.preventDefault()   
        await props.enviarComment(value, props.itinerary._id,props.loggedUser.userName)
        props.listItineraries(props.id)
        // document.getElementById('comentario').value=''
        setValue('')
    }
    const keyPress = (e) =>{
         if(e.key=== 'Enter'){
             enviar();
        }
    }

    return (
        <div className="itinerario">
            <div className="containerItinerary">
                <div className="userItinerary">
                    <div className="userPic" style={{backgroundImage:`url('${props.itinerary.userPic}')`}}>
                    </div>
                    <h5 key={props.itinerary.itineraryTitle}>{props.itinerary.userName}</h5>
                </div>
                <div className="infoItinerary">
                <h4>{props.itinerary.itineraryTitle}</h4>
                    <div className="detalleItineray">
                        {props.loggedUser ?
                        <h1 onClick={()=>setLike(!like)}>{like ? <div style={{backgroundImage:'url("../assets/corazon1.png")', width:'24px',marginRight:'5px', height:'24px', backgroundSize:'cover'}}></div> :
                        <div style={{backgroundImage:'url("../assets/corazon1vacio.png")', width:'24px',height:'24px', marginRight:'5px', backgroundSize:'cover'}}></div>}</h1>
                        :
                        <div></div>
                        }
                        {/* {itinerary.likes !==0 ? 
                        <div className="likes">
                        <div style={{backgroundImage:'url("../assets/corazon1.png")', width:'24px',marginRight:'5px', height:'24px', backgroundSize:'cover'}}></div><h6>{itinerary.likes}</h6>
                        </div>
                        :
                        <div style={{backgroundImage:'url("../assets/corazon1vacio.png")', width:'24px',height:'24px', backgroundSize:'cover'}}></div>} */}
                        <h6>{props.itinerary.hours} Hours</h6>
                        <div style={{display:'flex', alignItems:'center',width:'50%'}}>Price:{[...Array(props.itinerary.price)].map((m,i)=>{
                            return (<div key={i} style={{backgroundImage:'url("../assets/billete.png")',margin:'0 2px',width:'2vw',height:'2vh',backgroundSize:'cover',backgroundPosition:'center'}}></div>)
                        })}</div>
                    </div>
                    <div className="hastags">
                        {props.itinerary.hastags.map((hastag,i) => {
                            return(<h6 key={i}>{hastag}</h6>)
                        })}
                    </div>
                </div>
            </div>
            
            {visible &&(
                <>
                <h4>Activities</h4>
                <div className="activities">
                    {props.itinerary.activities.length !==0 ?
                    (props.itinerary.activities.map(activity=>{
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
                        {props.itinerary.comments.length !==0 ?
                        (props.itinerary.comments.map(comment=>{
                            return <Comment key={comment._id} comment={comment} id={props.itinerary._id} idCity={props.id}/>
                        }))                    
                            :
                        <h4>No comments</h4>}
                        {props.loggedUser ?<><input className="comentario" autoComplete="off" id="comentario" value={value}  type="text" placeholder="Your comment!"  onChange={comment} onKeyPress={keyPress}/><button onClick={enviar}>enviar</button></>
                        :
                        <input className="comentario" disabled type="text" placeholder="You must be logged to comment!"/>}
                    </div>
                </div>
                </>
            )}
            <button onClick={()=> setVisible(!visible)}className="buttonActivities">{visible ? 'View less' : 'View more'}</button>
        </div>
    )

}
const mapStateToProps =state => {
    return {
        loggedUser:state.userR.loggedUser,
        commentario: state.itineraryR.comment
    }
}
const mapDispatchToProps ={
    enviarComment: itinerariesActions.addComment,
    listItineraries:itinerariesActions.getItinerary,
    borrarComment: itinerariesActions.deleteComment
}


export default connect(mapStateToProps,mapDispatchToProps)(Itinerary)