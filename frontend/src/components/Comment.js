const Comment = ({comment}) =>{
    return(
        <div className="comments">
            <div className="comment">
                <div className="userComment">
                    <div className="commentPic" style={{backgroundImage:`url(${comment.userPic})`}}>
                    </div>
                    <h6>{comment.userName}</h6> 
                </div>
                <p>{comment.comment}</p>
            </div>                        
        </div>
    )
}
export default Comment