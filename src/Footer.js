import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./index.css";

const PageFooter = () => {
  return (
    <Navbar className="bottom" bg="dark" variant="dark" sticky="bottom">
      <Row >
        <Col className="space witcher-font">
          <h4>White Wolf Inc.</h4>
          <p>1-800-273-82550</p>
          <p> White Orchard, Novigrad</p>
          <p>Inn at the Crossroads</p>
        </Col>
        <Col className="space witcher-font">
          <h4>Creators</h4>
          <p>Grand Master Vlad</p>
          <p> Eternal E-man</p>
          <p>#CodeCampers</p>
        </Col>
        <Col>
          <Nav defaultActiveKey="/" className="flex-column space witcher-font">
            <Nav.Link href="/Authors">Authors</Nav.Link>
            <Nav.Link href="/Recipes">Recipes</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Col>
      </Row>
      
    </Navbar>
    
  );
};
export default PageFooter;
   