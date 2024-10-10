

export default function DetailSection({children}){

    return (
        <section className="product-section d-flex justify-content-center align-items-center detail-section">
            {children} 
        </section>
    );
}