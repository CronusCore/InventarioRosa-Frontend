

export default function ProductDetails({Id}){
    //hacer medidas dinamicas de las imagenes

    return(
        <article className="card-details-product">
            <section className="image-collection">
                <figure>
                    <img className="image-preview" src="https://m.media-amazon.com/images/I/51LcexcMjTL.jpg" alt="" />
                </figure>
                <figure >
                    <img className="image-preview" src="https://m.media-amazon.com/images/I/51LcexcMjTL.jpg" alt="" />
                </figure>
                <figure >
                    <img className="image-preview" src="https://m.media-amazon.com/images/I/51LcexcMjTL.jpg" alt="" />
                </figure>
                <figure >
                    <img className="image-preview" src="https://m.media-amazon.com/images/I/51LcexcMjTL.jpg" alt="" />
                </figure>
                
                
            </section>
            <section className="image-principal">
                <figure>
                    <img className="image-view" src="https://m.media-amazon.com/images/I/51LcexcMjTL.jpg" alt="" />
                </figure>
                
            </section>
            <section className="product-details">
                <h3>ECO TWIST AZUL DE ULTIMA EDICION</h3>
                <p>Precio: 259 MXN</p>
                <p>Disponible: 2 unidades</p>
                <p>Color: Azul mediterraneo</p>
                <p>Descripción y características:
                Es una botella de capacidad de 1L en total en donde podrás guardar tus liquidos mas deseado, desde agua, refresco, cafe, entre otros mas. </p>
                <h6>Medios de contacto</h6>
                <span><img src="" alt="" /> 449231239</span>
            </section>

        </article>
    );
}