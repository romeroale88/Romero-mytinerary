import Carrousel from '../components/Carrousel'
import Call from '../components/Call'
import {useEffect} from 'react'

const Main = () =>{

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);    

    return (
        <section>
            <div style={{
                backgroundImage:'url("./assets/fondo.jpg")',
                minHeight:'85vh',
                width:'100%',
                backgroundSize:'cover'
            }}>
                <div className="callAction">
                    {/* Se llama al call to action  */}
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
                {/* Se llama al componente carrousel */}
                <Carrousel />
            </div>
        </section>
    )
}
export default Main