//imports
import React from "react";
import Auth from "../../utils/auth";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import Saw from "../../assets/images/circular_saw_blade.png";
import "../../App.css";
import { useLocation } from "react-router-dom";

function Navigation() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        // Logged in Nav bar
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/home">
              Cutting Edge
              <img
                src={Saw}
                style={{ width: "35px", height: "35px" }}
                className="App-logo"
                alt="saw app logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/game">Game</Nav.Link>

                <Nav.Link href="/" onClick={() => Auth.logout()}>
                  Logout
                </Nav.Link>
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
            <Navbar.Brand href="/home">
              Cutting Edge{" "}
              <img
                src={Saw}
                style={{ width: "35px", height: "35px" }}
                className="App-logo"
                alt="saw app logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/game">Game</Nav.Link>
                <Nav.Link href="/signuppage">Signup</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  }
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return (
    <header className="flex-row px-1">
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Navigation;
