import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogOut from '../../assets/logout.svg';
import { useState, useEffect } from 'react';

export default function HeaderAuth(){
    const [isScrolling , setIsScrolling] = useState(false);

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
            <Navbar.Brand href="#" className='title'>Inventario Rosa</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              />
              <div className='bar-container'  >
                <a className='color-light'><img src={LogOut}/> Cerrar sesion</a>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );

}