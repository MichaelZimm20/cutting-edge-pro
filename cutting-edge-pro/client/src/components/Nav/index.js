import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Saw from '../../assets/images/circular_saw_blade.png'
import '../../App.css'

function Navigation() {

    function showNavigation() {
      if (Auth.loggedIn()) {
        return (
          // Logged in Nav bar
            <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/home">Cutting Edge <img src={Saw} style={{ width: '35px', height: '35px'}} className='App-logo' alt='saw app logo'/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/cart">Cart</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/wood">Wood</NavDropdown.Item>
                    <NavDropdown.Item href="/metal">
                      Metal
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/Acrylic">Acrylic</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/games">
                    Games
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/" onClick={() => Auth.logout()}>Logout</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        );
      } else {
        return (
          // Nav bar for new users/ users who are not logged in
          <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Cutting Edge <img src={Saw} style={{ width: '35px', height: '35px'}} className='App-logo' alt='saw app logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cart">Cart</Nav.Link>
            <NavDropdown title="Material Options" id="basic-nav-dropdown">
              <NavDropdown.Item href="/wood">Wood</NavDropdown.Item>
              <NavDropdown.Item href="/metal">
                Metal
              </NavDropdown.Item>
              <NavDropdown.Item href="/Acrylic">Acrylic</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/games">
              Games
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/signuppage">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        );
      }
      
    }
  
    return (
      <header className="flex-row px-1">
        <nav>
          {showNavigation()}
        </nav>
      </header>
    );
  }

export default Navigation;
