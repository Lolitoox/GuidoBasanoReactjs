import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CardWidgetComponent/CardWidgetComponent';
import { Link } from 'react-router-dom';
import { useGetCategories } from '../../hooks/useCategories';

function NavbarComponent() {

    const { categories } = useGetCategories();

    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
            <Container>
                <Link to={'/'}>E-Commerce</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#link">About us</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            {categories.map((category, index) => {
                                return (
                                    <NavDropdown.Item key={index}>
                                        <Link key={index} to={`/category/${category}`}>
                                            {category}
                                        </Link>
                                    </NavDropdown.Item>
                                )
                            })}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidgetComponent />
            </Container>
        </Navbar>
    );
}


export default NavbarComponent;