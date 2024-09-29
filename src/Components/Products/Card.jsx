
const Card = ({Name, Price, Stock, Image})=>{
    return(
        <article className="product-card">
            <img src={Image} alt={`Image of ${Name}`} className="image-product"/>
            <div className="body-card-product">
                <h3 className="color-principal">{Name}</h3>
                <p>Precio: {Price} MXN</p>
                <p>Disponible: {Stock}</p>
                <button className="btn-card-product">Ver mas</button>
            </div>
        </article>
    );
}

export default Card;