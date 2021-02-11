import {connect} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle,faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import itinerariesActions from '../redux/actions/itinerariesActions'
import {useState } from 'react'

const Comment = (props) =>{
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState('')
    
    console.log(props)
    const borrar= async(e)=>{
        e.preventDefault()
        await props.borrarComment(props.id,props.comment._id,props.loggedUser.token)
        props.listItineraries(props.idCity)
    }   
    const editar= async(e)=>{
        setVisible(!visible)
        setValue(e.target.value)
        if(e.key === 'Enter'){
            await props.modifComment(props.comment._id,value)
        }
        props.listItineraries(props.idCity)
    }
    console.log(props.comment)
    return(
        <div className="comments">
            <div className="comment">
                <div className="userComment">
                    <h5>{props.comment.userName}</h5> 
                </div>
                <p>{props.comment.comment}</p>
            </div>
            {visible && <input type="text" />}
            {props.loggedUser && (
            props.loggedUser.userName ===props.comment.userName &&
            <>
            <p onClick={editar}><FontAwesomeIcon icon={faPencilAlt} style={{color: '#1c4573'}} /></p>
            <p onClick={borrar} ><FontAwesomeIcon icon={faTimesCircle} style={{color:'red'}}/></p>
            </>
            )}
                </div>
    )
}
const mapStateToProps = state=>{
    return {
        loggedUser:state.userR.loggedUser,
    }

}
const mapDispatchToProps={
    borrarComment: itinerariesActions.deleteComment,
    listItineraries:itinerariesActions.getItinerary,
    modifComment:itinerariesActions.modifComment
}

export default connect(mapStateToProps,mapDispatchToProps)(Comment)