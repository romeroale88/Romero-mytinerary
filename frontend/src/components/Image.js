const Image = ({imagen, titulo,id})=>{  
    return(
        <>
            <div className="imagen" style={{
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