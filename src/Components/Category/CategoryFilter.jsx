import CategoryFilterlogo from '../../assets/CategorySVG.svg'
import { useEffect, useState } from 'react';
import { endpointHost, setFirstScreenSize } from '../../Functions';

const CategoryFilter = () => {
    const [isShowCategory, setIsShowCategory] = useState(!setFirstScreenSize(598));
    const [categories, setCategories] = useState([]);

    const handleShowCategory = (e) => {
        setIsShowCategory(!isShowCategory);
        // Esconder el boton
        e.target.closest('button').classList.toggle('hidden-button');
    }

    useEffect(() => {


        const handleResize = () => {
            const isScreenMob = setFirstScreenSize(598);

            setIsShowCategory(!isScreenMob || isShowCategory);
        }

        const getCategories = async () => {
            try {
                const data = await fetch(`${endpointHost}/category`, {
                    method: 'GET',
                });
                const jsonC = await data.json();
                setCategories(jsonC);
            } catch {}

        }
        getCategories();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        //Crear el boton cuando sea tamano movil
        <>

            <button className={`mobile-category ${isShowCategory ? '' : 'hidden-button'}`} onClick={handleShowCategory}>
                <img src={CategoryFilterlogo} />
            </button>

            <section className={`filter-section ${isShowCategory ? '' : 'hidden-category-section'}`}>

                <header className='category-header color-titulos'>
                    <img src={CategoryFilterlogo} /> Categorias
                </header>

                <section className='section-category-btns'>
                    {
                        categories?.map((category) => 
                            <button className=' btn-category' key={category.ID}>
                                {category.category_name}
                            </button>
                        )
                    }


                </section>
            </section>
        </>


    );
}

export default CategoryFilter;