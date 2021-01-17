import {Link, NavLink} from 'react-router-dom'
import User from './User'

const Header= () => {
    return (
        <header>
            <div className="containerUser"><User /></div>
            <nav>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/cities'>Cities</NavLink>

            </nav>
        </header>
    )
}
export default Header