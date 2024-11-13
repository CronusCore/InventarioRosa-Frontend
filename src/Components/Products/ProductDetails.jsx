import WhatsApp from '../../assets/whatsapp.svg'
import Facebook from '../../assets/facebook.svg'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { endpointHost } from "../../Functions";
import useFetch from '../../Hooks/useFetch';

export default function ProductDetails() {
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
    const { id } = useParams();
    const [imagePrincipal, setImagePrincipal] = useState("");
    const [isSuccess, error, data] = useFetch(`${endpointHost}/product/${id}`);
    
    
    useEffect(() => {
        const getProduct = async () => {
       
            if(isSuccess && data){
                setImages(data[0].imagenes.split(","));
                setImagePrincipal(data[0].imagenes.split(",")[0]);
                setProduct(data[0]);
            }else if(error){
                console.error(error.message);
            }

        }

        getProduct();
    }, [isSuccess, error, data]);

    const handlePrincipalImage = (e) =>{
        setImagePrincipal(e.target.closest('img').src);
    }

    return (
        <section className="product-section d-flex justify-content-center align-items-center detail-section">


            <article className="card-details-product">
                <section className="image-collection">
                    {
                        images?.map((image, index) =>
                            <figure key={index} >
                                <img className="image-preview" src={image} alt=''  onClick={handlePrincipalImage}/>
                            </figure>
                        )

                    }

                </section>
                <section className="image-principal">
                    <figure>
                        <img className="image-view" src={imagePrincipal}/>
                    </figure>

                </section>
                <section className="product-details">
                    <h3 className="color-titulos mb-5">{product.producto_nombre}</h3>
                    <p><strong>Precio:</strong> {product.precio} MXN</p>
                    <p><strong>Disponible:</strong> {product.cantidad} unidades</p>
                    <p><strong>Color:</strong> {product.color}</p>
                    <p><strong>Sku: </strong>{product.sku}</p>
                    <p><strong>Descripción y características: </strong> {product.descripcion}</p>
                    <h6 className="color-titulos subtitulo mt-5">Medios de contacto</h6>
                    <p><img src={WhatsApp} alt="whatsapp" /> +52 449231239</p>
                    <p><img src={Facebook} alt="facebook"></img> Gorditaberrinchuda</p>
                </section>

            </article>
        </section>
    );
}