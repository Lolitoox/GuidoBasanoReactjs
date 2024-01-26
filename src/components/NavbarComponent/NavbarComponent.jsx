import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CardWidgetComponent/CardWidgetComponent';
import { Link, useNavigate } from 'react-router-dom';
import { useGetCategories } from '../../hooks/useCategories';

function NavbarComponent() {
    const { categories } = useGetCategories();
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        navigate(`/category/${category}`);
    };

    const uniqueCategories = Array.from(new Set(categories.map(category => category.category)));

    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
            <Container>
                <Link to={'/'}>Store A</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#link">About us</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            {uniqueCategories.map((category) => (
                                <NavDropdown.Item key={category} onClick={() => handleCategoryClick(category)}>
                                    {category}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidgetComponent />
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
