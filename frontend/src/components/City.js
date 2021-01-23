import {Link} from 'react-router-dom'

const City = ({cityPic,cityName,_id}) =>{
    return(
        <Link to={`/city/${_id}`}>
            <div  className="imagenCity" style={{
            backgroundImage:`url('${cityPic}')`,
            width:'60vw',
            height:'50vh',
            backgroundSize:'cover'
        }}>
            <h3>{cityName}</h3>
            </div>
        </Link>
    )
}
export default City