import Image from './Image'

const Slide = ({images})=>{  
    return (
        // se mapea y se pasa al componente image para el armado de las imagenes para el carrosuel
        <div className="imagenes">
            {images.map((image) => {
                return ( <Image key={image.titulo} imagen={image.imagen} titulo={image.titulo} />
                )
            })} 
        </div>
    )
}
export default Slide