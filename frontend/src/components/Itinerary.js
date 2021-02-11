import { connect } from "react-redux"
import { useState } from "react"
import Comment from './Comment'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import itinerariesActions from '../redux/actions/itinerariesActions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



const Itinerary = (props) =>{
    const [visible, setVisible] = useState(false)
    const [like, setLike] = useState(false)
    const [value, setValue] = useState('')
    
    const comment = e =>{
        setValue(e.target.value)
    }
    
    const enviar = async (e) =>{
        await props.enviarComment(value, props.itinerary._id,props.loggedUser.token)
        props.listItineraries(props.id)
        setValue('')
    }
    const keyPress = (e) =>{
         if(e.key=== 'Enter'){
             enviar();
        }
    }

    const likesss = props.itinerary.likes
    const encontraado = likesss.includes(props.loggedUser.idUser)
    const likes = async(e) =>{
        await props.like(props.itinerary._id,props.loggedUser.token)
        props.listItineraries(props.id)
    }
    const dislike= async (e) =>{
        await props.dislike(props.itinerary._id,props.loggedUser.token)
        props.listItineraries(props.id)
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
                        {props.loggedUser &&(
                            encontraado ?
                            <div onClick={dislike} className="iconoLike" style={{backgroundImage:'url("../assets/corazon1.png")'}}></div>
                            :
                            <div onClick={likes} className="iconoLike" style={{backgroundImage:'url("../assets/corazon1vacio.png")'}}></div>
                        )}
                        <h1>{likesss.length}</h1>
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
                        {props.loggedUser ?<div style={{display:'flex', alignItems:'center'}}><input className="comentario" autoComplete="off" id="comentario" value={value}  type="text" placeholder="Your comment!"  onChange={comment} onKeyPress={keyPress}/><p onClick={enviar}><FontAwesomeIcon icon={faPaperPlane} style={{color:'#1c4573'}} /></p></div>
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
    borrarComment: itinerariesActions.deleteComment,
    like:itinerariesActions.like,
    dislike: itinerariesActions.dislike
}
export default connect(mapStateToProps,mapDispatchToProps)(Itinerary)