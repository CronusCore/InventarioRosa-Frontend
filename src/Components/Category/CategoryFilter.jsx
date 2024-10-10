import CategoryFilterlogo from '../../assets/CategorySVG.svg'
import { useEffect, useState } from 'react';
import { setFirstScreenSize } from '../../Functions';

const CategoryFilter = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(setFirstScreenSize(598));
    const [isShowCategory, setIsShowCategory] = useState(!setFirstScreenSize(598));

    const handleShowCategory = (e) => {
        setIsShowCategory(!isShowCategory);
    }

    useEffect(() => {


        const handleResize = () => {
            const isScreenMob = setFirstScreenSize(598);
            setIsMobileScreen(isScreenMob);
            setIsShowCategory(!isScreenMob || isShowCategory );

            
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        //Crear el boton cuando sea tamano movil
        <>
            {isMobileScreen ?

                <button className='mobile-category' onClick={handleShowCategory}>
                    <img src={CategoryFilterlogo} />
                </button>

                : null}
            {isShowCategory &&
                <section className="filter-section">
                    <header className='category-header color-titulos'>
                        <img src={CategoryFilterlogo} /> Categorias
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
                        <button className='btn-category'>
                            Platos
                        </button>
                        <button className='btn-category'>
                            Platos
                        </button>
                        <button className='btn-category'>
                            Platos
                        </button>
                        <button className='btn-category'>
                            Platos
                        </button>
                        <button className='btn-category'>
                            Platos
                        </button>
                        <button className='btn-category'>
                            Platos
                        </button>
                        <button className='btn-category'>
                            Platos
                        </button>
                    </section>
                </section>
            }
        </>
    );
}

export default CategoryFilter;