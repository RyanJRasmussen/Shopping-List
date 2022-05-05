import React from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import plate from '../images/fork&knife.png';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="" variant="light" >
        <Container>
        <Navbar.Brand href="/">{<img src={plate} id="testLogo"/>}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pantry">My Pantry</Nav.Link>
            <Nav.Link href="/shoppinglist">Shopping List</Nav.Link>
            <Nav.Link href="/findrecipes">Find Recipes</Nav.Link>
            <Nav.Link href="/favorites">Favorite Recipes</Nav.Link>
            </Nav>
            <Nav>
                <div><hr/></div>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar;