import Header from '../Struct/Header'
import Card from './Card';
import FilterSection from '../Category/FilterSection';
import ProductSection from './ProductSection';

const HomePage = () => {
    return (
        <>
            <Header />
            <section className='principal-layer'>
                {/** Componente de CATEGORIAS*/}

                <FilterSection />
                <ProductSection>
                        <Card Name="Eco Twist" Price="200" Stock="32" Image="https://m.media-amazon.com/images/I/51LcexcMjTL.jpg" />
                        <Card Name="Eco Twist" Price="200" Stock="32" Image="url" />
                        <Card Name="Eco Twist" Price="200" Stock="32" Image="url" />
                        <Card Name="Eco Twist" Price="200" Stock="32" Image="url" />
                        <Card Name="Eco Twist" Price="200" Stock="32" Image="url" />
                        <Card Name="Eco Twist" Price="200" Stock="32" Image="url" />
                        <Card Name="Eco Twist" Price="200" Stock="32" Image="url" />
                        <Card Name="Eco Twist" Price="200" Stock="32" Image="url" />
                </ProductSection>

            </section>
        </>
    );
}

export default HomePage;