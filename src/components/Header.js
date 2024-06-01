import '../css/Header.css';
import logo from '../Assets/jobnexus_logo.png';

import React, { useEffect } from 'react';
import { NavbarBrand, Nav, Button, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

const Header = () => {

  useEffect(() => {
    ScrollReveal().reveal(".navbar-container", {
      origin: "top",
      duration: 1500,
      distance: "100px",
      scale: 1,
    });
  }, []);

  return (
    <div className='sticky-nav shadow navbar-container'>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <NavbarBrand href='#home' className='logoo'>
            <NavLink to="/">
              <img className='image-fluid' src={logo} height={45} width={200} alt="JobVista Logo" />
            </NavLink>
          </NavbarBrand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className='ps-4 pe-4 navlinks-middle text-decoration-none menu-item'>Home</NavLink>
              <NavLink to="/jobs" className='ps-4 pe-4 navlinks-middle text-decoration-none menu-item'>Find a Job</NavLink>
              <NavLink to="/about" className='ps-4 pe-4 navlinks-middle text-decoration-none menu-item'>About</NavLink>
              <NavLink to="/contactus" className='ps-4 pe-4 navlinks-middle text-decoration-none menu-item'>Contact</NavLink>
            </Nav>
            <Nav>
              <NavLink to="/login" className="text-decoration-none">
                <button className="ms-4 btn btn-primary">Login</button>
              </NavLink>
              <Button variant="success" className="ms-2">
                Register
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
