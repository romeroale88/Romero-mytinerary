import {connect} from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'

const Comment = (props) =>{
    
    console.log(props)
    const borrar= async(e)=>{
        e.preventDefault()
        await props.borrarComment(props.id,props.comment._id)
        props.listItineraries(props.idCity)
    }
    const editar= async(e)=>{
        e.preventDefault()
        await props.modifComment(props.id,props.comment._id)
        props.listItineraries(props.idCity)
    }
    

    return(
        <div className="comments">
            <div className="comment">
                <div className="userComment">
                    <div className="commentPic" style={{backgroundImage:`url(${props.comment.userPic})`}}>
                    </div>
                    <h5>{props.comment.userName}</h5> 
                </div>
                <p>{props.comment.comment}</p>
            </div>
            <button onClick={editar}>Editar</button>
            <button onClick={borrar} >eliminar</button>
        </div>
    )
}
// const mapStateToProps = state=>{

// }
const mapDispatchToProps={
    borrarComment: itinerariesActions.deleteComment,
    listItineraries:itinerariesActions.getItinerary,
    modifComment:itinerariesActions.modifComment
}

export default connect(null,mapDispatchToProps)(Comment)