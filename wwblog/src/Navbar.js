import React, { Component } from "react";
import "./index.css";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

export class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">The White Wolf</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Authors">Authors</Nav.Link>
          <Nav.Link href="/Recipes">Recipes</Nav.Link>
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="#/">Contact</Nav.Link>
          
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search Recipes" className="mr-sm-2" />
          <Button>Hunt</Button>
        </Form>
      </Navbar>
    );
  }
}
