import Carrousel from './Carrousel'
import Call from './Call'


const Main = () =>{
    return (
        <section>
            <div className="home" style={{
                backgroundImage:'url("./assets/fondo.jpg")',
                minHeight:'85vh',
                width:'100%',
                backgroundSize:'cover'

            }}>
                <div className="callAction">
                        <Call />
                    <div className="logo" style={{
                        backgroundImage:'url("./assets/fuente.png")',
                        width:'35vw',
                        height:'35vh',
                        backgroundSize:'cover',
                    }}></div>
                </div>
            </div>
            <div className="containerCarrousel">
                <p className="popular">Popular Mytineraries</p>
                <Carrousel />
            </div>
        </section>
    )
}
export default Main