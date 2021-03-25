import React from "react";
import { Nav } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

const PageFooter = () => {
  return (
    <Container fixed="bottom" className="h-100 bottom">
      <Row>
        <Col>
          <h4>White Wolf Inc.</h4>
          <p>1-800-273-82550</p>
          <p> White Orchard, Novigrad</p>
          <p>Inn at the Crossroads</p>
        </Col>
        <Col>
          <h4>Creators</h4>
          <p>Grand Master Vlad</p>
          <p> Eternal E-man</p>
          <p>#CodeCampers</p>
        </Col>
        <Col>
          <Nav defaultActiveKey="/" className="flex-column" fixed="bottom">
            <Nav.Link href="/Authors">Authors</Nav.Link>
            <Nav.Link href="/Recipes">Recipes</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Col>
      </Row>
      <hr />
        &copy;{new Date().getFullYear()} #CodeCampBlog| All Rights made up |
         Not liable for Nekker attacks
    </Container>
  );
};
export default PageFooter;
   