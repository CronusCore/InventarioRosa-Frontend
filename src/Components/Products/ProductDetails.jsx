import WhatsApp from '../../assets/whatsapp.svg'
import Facebook from '../../assets/facebook.svg'

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
                <h3 className="color-titulos mb-5">ECO TWIST AZUL DE ULTIMA EDICION</h3>
                <p><strong>Precio:</strong> 259 MXN</p>
                <p><strong>Disponible:</strong> 2 unidades</p>
                <p><strong>Color:</strong> Azul mediterraneo</p>
                <p><strong>Descripción y características: </strong> 
                 Es una botella de capacidad de 1L en total en donde podrás guardar tus liquidos mas deseado, desde agua, refresco, cafe, entre otros mas. </p>
                <h6 className="color-titulos subtitulo mt-5">Medios de contacto</h6>
                <p><img src={WhatsApp} alt="whatsapp" /> +52 449231239</p>
                <p><img src={Facebook} alt="facebook"></img> Gorditaberrinchuda</p>
            </section>

        </article>
    );
}