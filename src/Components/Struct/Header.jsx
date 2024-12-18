import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AdministratorLogo from '../../assets/category-minus.svg';
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react';
import { useContext } from "react";
import { SearchContext, LoginContext } from "../Products/HomePage";
import { useNavigate } from 'react-router-dom';



 const Header = () =>{
    const [isScrolling , setIsScrolling] = useState(false);
    const {setValueSearch} = useContext(SearchContext);
    const {isShowLogin, setIsShowLogin} = useContext(LoginContext);
    const navigate = useNavigate();
    const handlerEnter = (e) =>{
        if(e.key === 'Enter'){
          
            setValueSearch(e.target.value);
            console.log(e.target.value);  
            if(window.location.pathname !== '/'){
              navigate('/');
            }
        }
    }

    const handleScroll = (e) =>{
      if(window.scrollY > 1){
        setIsScrolling(true);
      }else{
        setIsScrolling(false);
      }

    }
    useEffect(() =>{
        window.addEventListener('scroll', handleScroll);
        return ()=>{
          window.removeEventListener('scroll', handleScroll);
        }
    },[]);



    return (
        <Navbar expand="lg" className={`${isScrolling ? "bg-scrolling" : "bg-principal" } p-2 nav-fixed`}>
          <Container fluid>
            <Navbar.Brand href="/" className='title'>Inventario Rosa</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              />
              <div className='bar-container'  >
                <SearchBar Width={"700px"} Height={"32px"} Placeholder={"Busca tus productos favoritos"} handlerEnter={handlerEnter}  />
                <a className='color-light' onClick={()=> setIsShowLogin(!isShowLogin)}><img src={AdministratorLogo}/> Administrar</a>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
 }

 export default Header;