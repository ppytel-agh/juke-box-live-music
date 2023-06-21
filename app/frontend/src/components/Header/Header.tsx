import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/wydarzenia">Wydarzenia</Nav.Link>

            {isLogged ? (
              <>
                <Nav.Link href="/panel-klienta">Panel klienta</Nav.Link>
                <Nav.Link href="/">Wyloguj</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/zaloguj-sie">Zaloguj się</Nav.Link>
                <Nav.Link href="/zarejestruj-sie">Zarejestruj się</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
