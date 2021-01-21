import {Link} from 'react-router-dom'
const Call = ()=>{
    return(
        <div className="call">
            <p>Find your perfect trip, designed by insiders who know and love their cities</p>
            <Link to="/cities">
                <h6 className="buttonCall">Entering here</h6>
            </Link>
        </div>
    )
}
export default Call