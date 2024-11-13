import { Link, useParams } from "react-router-dom";

const Card = ({Name, Price, Stock, Image, Id, Sku})=>{
    

    return(
        <article className="product-card" >
            <img src={Image} alt={`Image of ${Name}`} className="image-product"/>
            <span className="sku-target">sku: {Sku}</span>
            <div className="body-card-product">
                <h3 className="color-titulos">{Name}</h3>
                <div className="body-info-card">
                    <p>Precio: {Price} MXN</p>
                    <p>Disponible: {Stock}</p>
                </div>
                <Link to={`/showMoreInfo/${Id}`}>
                    <button className="btn-card-product" >Ver mas</button>
                </Link>
            </div>
        </article>
    );
}

export default Card;