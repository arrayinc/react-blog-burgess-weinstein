import React, { Component } from "react";
import "./index.css";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

export class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">The White Wolf</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#authors">Authors</Nav.Link>
          <Nav.Link href="#recipes">Recipes</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">contact</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button>Hunt</Button>
        </Form>
      </Navbar>
    );
  }
}
