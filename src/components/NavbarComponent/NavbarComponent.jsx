import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidgetComponent from '../CardWidgetComponent/CardWidgetComponent';
import './NavbarComponent.css'


function NavbarComponent() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Ecomerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Nosotros</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Categoria 2
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Categoria 4
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidgetComponent />
            </Container>
        </Navbar>
    );
}


export default NavbarComponent;