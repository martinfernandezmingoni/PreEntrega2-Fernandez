import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from '../CartWidget/CartWidget';
import './style.css';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  const logo = "https://i.postimg.cc/9M6GtS7G/logo.png";
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link  to={'/'}>
            <img className="logoNav" src={logo} alt="logo"/>
          </Link>
          <Nav className="me-auto navi">
            <ul className='links'>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/Store'}>Store</Link></li>
              <li><Link to={'/Top100'}>Top 100</Link></li>
            </ul>
          </Nav>
        </Container>
        <Link to={'/Carrito'}>
          <CartWidget />
        </Link>
      </Navbar>
    </>
        );
    }
    
export default ColorSchemesExample;