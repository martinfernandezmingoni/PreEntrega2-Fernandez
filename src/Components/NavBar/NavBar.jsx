import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from '../CartWidget/CartWidget';
import './style.css';

function ColorSchemesExample() {
  const logo = "https://i.postimg.cc/9M6GtS7G/logo.png";
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img className="logoNav" src={logo} alt="logo" />
          <Navbar.Brand href="#home">Gaia Games Store</Navbar.Brand>
          <Nav className="me-auto navi">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="./CartWidget/CartWidget.js">Store</Nav.Link>
            <Nav.Link href="#pricing">Carrito</Nav.Link>
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
    </>
        );
    }
    
export default ColorSchemesExample;