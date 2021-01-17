import Image from './Image'

const Images = ({images})=>{  
    return (
        <div className="imagenes">
            {images.map(image => {
                return ( <Image key={image.imagen} imagen={image.imagen} titulo={image.titulo} />
                )
            })} 
        </div>
    )
}
export default Images