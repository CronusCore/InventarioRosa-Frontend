import CategoryFilterlogo from '../../assets/CategorySVG.svg'


const CategoryFilter = () => {
    return (
        <section className="filter-section">
            <header className='category-header color-titulos'>
                <img src={CategoryFilterlogo} />  Categorias
            </header>

            <section className='section-category-btns'>
                <button className=' btn-category'>
                    Platos
                </button>
                <button className=' btn-category'>
                    Platos
                </button>
                <button className='btn-category'>
                    Platos
                </button>
            </section>



        </section>
    );
}

export default CategoryFilter;