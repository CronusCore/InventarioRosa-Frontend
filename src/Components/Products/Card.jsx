
const Card = ({Name, Price, Stock, Image})=>{
    return(
        <article className="product-card">
            <img src={Image} alt={`Image of ${Name}`} className="image-product"/>
            <div className="body-card-product">
                <h3 className="color-titulos">{Name}</h3>
                <div className="body-info-card">
                    <p>Precio: {Price} MXN</p>
                    <p>Disponible: {Stock}</p>
                </div>
                <button className="btn-card-product">Ver mas</button>
            </div>
        </article>
    );
}

export default Card;