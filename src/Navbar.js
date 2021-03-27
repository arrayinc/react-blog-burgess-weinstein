import React from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = (props) => {
  const location = useLocation();
  console.log(props);
  return (
    <Navbar bg="dark" variant="dark" sticky="top" className="NavBar">
      <Navbar.Brand href="/" className="NavbarTitle witcher-font">
        The White Wolf
      </Navbar.Brand>
      <Nav
        activeKey={location.pathname}
        className="NavbarButtons witcher-font ml-auto"
      >
        <Nav.Link href="/Authors">Authors</Nav.Link>
        <Nav.Link href="/Recipes">Recipes</Nav.Link>
        <Nav.Link href="/About">About</Nav.Link>
        <Nav.Link href="/Contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
