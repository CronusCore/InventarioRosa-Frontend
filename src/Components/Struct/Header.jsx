import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AdministratorLogo from '../../assets/category-minus.svg';
import SearchBar from './SearchBar';


 const Header = () =>{

    return (
        <Navbar expand="lg" className="bg-principal p-2 nav-fixed">
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
                <SearchBar Width={"700px"} Height={"32px"} />
                <a className='color-light'><img src={AdministratorLogo}/> Administrar</a>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
 }

 export default Header;