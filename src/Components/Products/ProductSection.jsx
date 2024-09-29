import Card from "./Card";
const ProductSection = ({children})=>{
    return(
        <section className='product-section'>
                    <h1 className='title-results'>Productos Disponibles</h1>
                    <div className='cards-container'>

                        
                        {children}


                    </div>
                </section>
    );
}

export default ProductSection;