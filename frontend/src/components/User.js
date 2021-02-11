import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'

const User = (props) => {
  console.log(props.loggedUser)
  const [visible, setVisible] = useState(false)

  return (
    <>
      {props.loggedUser ? <div className="userProfile" style={{backgroundImage:`url(${props.loggedUser.urlPic})`}}></div>
      :
      localStorage.getItem('token') ? props.logFromLs(localStorage.getItem('userName'),localStorage.getItem('urlPic'),localStorage.getItem('idUser'))
      :
      <div className="userProfile" style={{
        backgroundImage:'url("./assets/user.png")'
    }}></div>
      }
      
      <div className="visibleSing">
        {visible && 
        <div className="login">
          {props.loggedUser ? 
          <>
          <p className="logout" onClick={()=> props.logoutUser()}>Logout</p>
          <p>{`Welcome, ${props.loggedUser.userName}`}</p>
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
  logoutUser: userActions.logoutUser,
  logFromLs: userActions.logFromLs
}

export default connect(mapStateToProps,mapDispatchToProps)(User) 