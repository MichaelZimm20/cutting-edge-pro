import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {

    function showNavigation() {
      if (Auth.loggedIn()) {
        return (
            // TODO: Update styling to match non-logged in nav bar, make decision on Previous order page
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/orderHistory">
                Order History
              </Link>
            </li>
            <li className="mx-1">
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        );
      } else {
        return (
          <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Cutting Edge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/signuppage">Signup</Nav.Link>
            <Nav.Link href="/Upload">Image Upload</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/wood">Wood</NavDropdown.Item>
              <NavDropdown.Item href="/metal">
                Metal
              </NavDropdown.Item>
              <NavDropdown.Item href="/vinyl">Vinyl</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/games">
              Games
              </NavDropdown.Item>
            </NavDropdown>
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
