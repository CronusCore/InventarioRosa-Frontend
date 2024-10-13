import { useEffect, useState } from 'react';
import { setFirstScreenSize } from '../../Functions';
import IconSection from '../../assets/adjustments.svg'

export default function SideBar(){
    const [isShowCategory, setIsShowCategory] = useState(!setFirstScreenSize(598));

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
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        //Crear el boton cuando sea tamano movil
        <>

            <button className={`mobile-category ${isShowCategory ? '' : 'hidden-button'}`} onClick={handleShowCategory}>
                <img src={IconSection} />
            </button>

            <section className={`filter-section ${isShowCategory ? '' : 'hidden-category-section'}`}>

                <header className='category-header color-titulos'>
                    <img src={IconSection} /> Administrar
                </header>
                

                <section className='section-category-btns'>
                    <button className=' btn-category'>
                        Productos
                    </button>
                    <button className=' btn-category'>
                        Categorias
                    </button>
                    
                </section>
            </section>
        </>


    );
};