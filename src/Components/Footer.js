import React from "react";
import { Nav, Navbar, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import BackToTop from "./BackToTop";

const PageFooter = (props) => {
  const location = useLocation();
  console.log(props);
  return (
    <Navbar className="NavBarBottom" bg="dark" variant="dark" sticky="bottom">
      <Row>
        <Col className="space witcher-font">
          <h5>White Wolf Inc.</h5>
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
          <Nav
            activeKey={location.pathname}
            className="flex-column space witcher-font"
          >
            <Nav.Link href="/Authors">Authors</Nav.Link>
            <Nav.Link href="/Recipes">Recipes</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Col>
      </Row>

      <BackToTop />
    </Navbar>
  );
};
export default PageFooter;
