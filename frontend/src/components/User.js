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
      <div className="user" style={{
        backgroundImage:'url("./assets/user.png")',
        width:'50px',
        height:'50px',
        backgroundSize:'cover'
    }}></div>
      <div className="visibleSing">
        {visible && 
        <div style={{display:'flex', justifyContent:'space-between'}}>
          {props.loggedUser ? <p onClick={()=> props.logoutUser()}>logout</p>
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