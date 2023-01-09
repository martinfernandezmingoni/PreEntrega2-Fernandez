import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
              <li><Link to={'/store'}>Store</Link></li>
              <li><Link to={'/Top100'}>Top 100</Link></li>
              <li><NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <Link className='dropdown' to={'/categoria/1-jugador'}>1 Jugador</Link>
              <Link className='dropdown' to={'/categoria/2-jugadores'}>2 Jugadores</Link>
              <Link className='dropdown' to={'/categoria/estrategia'}>Estrategia</Link>
              <Link className='dropdown' to={'/categoria/cartas'}>Cartas</Link>
              
            </NavDropdown>
            </li>
          </ul>
          </Nav>
        </Container>
        <Link to={'/'}>
          <CartWidget />
        </Link>
      </Navbar>
    </>
        );
    }
    
export default ColorSchemesExample;