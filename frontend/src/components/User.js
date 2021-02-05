import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'

const User = (props) => {
  console.log(props)
  const [visible, setVisible] = useState(false)

  return (
    <>
      {props.loggedUser ? <div className="userProfile" style={{backgroundImage:`url(${props.loggedUser.urlPic})`}}></div>
      :
      <div className="userProfile" style={{
        backgroundImage:'url("./assets/user.png")'
    }}></div>
      }
      
      <div className="visibleSing">
        {visible && 
        <div style={{display:'flex', justifyContent:'space-between'}}>
          {props.loggedUser ? 
          <>
          <p onClick={()=> props.logoutUser()}>logout</p>
          <p>{`Welcome, ${props.loggedUser.nombre}`}</p>
          </>
          :<>
          <NavLink to='/signin'><p>Sign In</p></NavLink>
          <NavLink to='/signup'><p>Sing Up</p></NavLink>
          </>}
        
        </div>}
        <p onClick={()=> setVisible(!visible)}>{visible ?<FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</p>
      </div>    
    </>
  )
}
const mapStateToProps = state =>{
  return {
    loggedUser: state.userR.loggedUser
  }
}
const mapDispatchToProps = {
  logoutUser: userActions.logoutUser
}

export default connect(mapStateToProps,mapDispatchToProps)(User) 