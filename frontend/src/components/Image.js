const Image = ({imagen, titulo})=>{  
    const clic = () =>{
        alert(`Hiciste clic en ${titulo}`)
    }
    return(
        <>
            <div onClick={clic} className="imagen" style={{
                            backgroundImage: `url("${imagen}")`,
                            width:' 35vw',
                            height: '35vh',
                            backgroundSize:'cover',
                                                }}>
                        <h3>{titulo}</h3>
            </div>

        </>
    )
}
export default Image