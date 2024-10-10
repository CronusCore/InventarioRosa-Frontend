import Header from '../Struct/Header'
import Card from './Card';
import CategoryFilter from '../Category/CategoryFilter';
import ProductSection from './ProductSection';

const HomePage = () => {
    return (
        <>
            <Header />
            <section className='principal-layer'>
        

                <CategoryFilter />
                <ProductSection>
                        <Card Name="Eco Twist" Price="200" Stock="32" Image="https://m.media-amazon.com/images/I/51LcexcMjTL.jpg" Id={1} />
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