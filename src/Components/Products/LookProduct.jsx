import Header from "../Struct/Header";
import CategoryFilter from "../Category/CategoryFilter";
import ProductSection from "./ProductSection";
import DetailSection from "./DetailSection";
import ProductDetails from "./ProductDetails";

export default function LookProduct(){

    return (
        <>
            <Header />
            <section className='principal-layer'>
    
                <CategoryFilter />
                <DetailSection>
                    <ProductDetails/>
                </DetailSection>


            </section>
        </>
    );
}