import React, { Component } from "react";
import "./index.css";
import { Navbar, Nav } from "react-bootstrap";

export class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="/" className="NavbarTitle witcher-font">The White Wolf</Navbar.Brand>
        <Nav className="NavbarButtons witcher-font ml-auto" >
          <Nav.Link href="/Authors">Authors</Nav.Link>
          <Nav.Link href="/Recipes">Recipes</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Contact">Contact</Nav.Link>
          
        </Nav>
      </Navbar>
    );
  }
}
