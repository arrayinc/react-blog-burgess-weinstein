import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navigation = (props) => {
  const location = useLocation();
  return (
    <Navbar
      collapseOnSelect
      bg="dark"
      variant="dark"
      sticky="top"
      className="NavBar"
    >
      <Navbar.Brand href="/" className="NavbarTitle witcher-font">
        The White Wolf
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          activeKey={location.pathname}
          className="NavbarButtons witcher-font ml-auto"
        >
          <Nav.Link href="/Authors">Authors</Nav.Link>
          <NavDropdown title="Recipes" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/blogPost/1">
              King's Court Lamb
            </NavDropdown.Item>
            <NavDropdown.Item href="/blogPost/2">
              Villenmerth pizza
            </NavDropdown.Item>
            <NavDropdown.Item href="/blogPost/3">
              Mulled Mandrake Wine
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Recipes/2.4">
              Recipes Index
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
