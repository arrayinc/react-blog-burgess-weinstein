import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

// useLocation is here to eventually display the current location of the user on the site. //

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
      {/* Brand is the title of the site rendered on the top left */}
      <Navbar.Brand href="/" className="NavbarTitle witcher-font">
        The White Wolf
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          activeKey={location.pathname}
          className="witcher-font ml-auto"
        >
          <Nav.Link className="NavbarButtons NavbarHover" href="/">
            Home
          </Nav.Link>

          <NavDropdown
            className="Navbar-Dropdown"
            title="Recipes"
            id="collasible-nav-dropdown"
          >

            {/* The dropdown.Item(s) below are styled by a hidden boostrap class only found by inspecting */}
            {/* Their styling is seperate from that of their parent NavDropdown button coded above */}

            {/* The href path is created by App.js when blogsData of component BlogData is mapped, look for path={"/blogPost/" + val.id} in App.js */}
            <NavDropdown.Item href="/blogPost/1">
              King's Court Lamb
            </NavDropdown.Item>
            <NavDropdown.Item href="/blogPost/3">
              Villenmerth pizza
            </NavDropdown.Item>
            <NavDropdown.Item href="/blogPost/2">
              Mulled Mandrake Wine
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Recipes/2.4">
              Recipes Index
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="NavbarButtons NavbarHover" href="/Authors">
            Authors
          </Nav.Link>
          <Nav.Link className="NavbarButtons NavbarHover" href="/Contact">
            Contact
          </Nav.Link>
          <Nav.Link className="NavbarButtons NavbarHover" href="/Login">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
