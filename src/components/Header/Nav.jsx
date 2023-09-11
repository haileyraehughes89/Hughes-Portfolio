import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../styles/NavStyle.css";


function Menu() {
  const currentPage = useLocation().pathname;
  return (
    <Navbar expand="lg" className="header fixed-top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" id="name-text">
          Hailey Rae
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="navbar-nav">
            <Nav.Item>
              <Link
                to="/"
                className={currentPage === "/" ? "nav-link active" : "nav-link"}
              >
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/Portfolio"
                className={
                  currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/Resume"
                className={
                  currentPage === "/Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
