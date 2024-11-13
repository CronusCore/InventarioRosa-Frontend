import Header from '../Struct/Header'
import Card from './Card';
import CategoryFilter from '../Category/CategoryFilter';
import ProductSection from './ProductSection';
import { Outlet } from 'react-router-dom';
import { createContext, useState } from 'react';
import Login from '../Auth/Login';

export const SearchContext = createContext(null);
export const LoginContext = createContext(null);

const HomePage = () => {
    
    const [valueSearch, setValueSearch] = useState("");
    const [isShowLogin, setIsShowLogin] = useState(false);

    return (
        <SearchContext.Provider value={{valueSearch, setValueSearch}} >
            <LoginContext.Provider value={{isShowLogin, setIsShowLogin}}>
            <Header />
            <section className='principal-layer'>
                <CategoryFilter />
                <Outlet>
                
                </Outlet>
                {isShowLogin&& <Login></Login>}
                
            </section>
            </LoginContext.Provider>

        </SearchContext.Provider>
    );
}

export default HomePage;