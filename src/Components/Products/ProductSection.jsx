import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { endpointHost } from "../../Functions";
import useFetch from '../../Hooks/useFetch';
import { SearchContext } from "./HomePage";



const ProductSection = () => {

    const {valueSearch} = useContext(SearchContext);
    const [products, setProducts] = useState([]);
    const [isSuccess, error, data] = useFetch(!valueSearch ? `${endpointHost}/product/`:`${endpointHost}/product/search?name=${valueSearch.toString()}` );
    

    useEffect(()=>{
        const getProducts = async () =>{
            if(isSuccess && data){
                setProducts(data);
            }else if(error){

                console.error(error.message);
            }
        }

        getProducts();

    }, [isSuccess, error, data])
    return (

        <section className='product-section'>
            <h1 className='color-titulos'>
                PRODUCTOS DISPONIBLES
                { 
                    valueSearch ? `\npara "${valueSearch}"` : ''
                }
                </h1>
            <div className='cards-container'>
                {
                    products?.map((product)=> 
                        <Card Name={product.producto_nombre} Price={product.precio} Stock={product.cantidad} Image={product.imagen} Id={product.ID} Sku={product.sku} key={product.ID}/>
                    )
                }

            </div>
        </section>
    );
}

export default ProductSection;