import React from "react";
import { Nav, Navbar, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import BackToTop from "./backtotop";

//sets up props for the page
const PageFooter = (props) => {
  const location = useLocation();
  //start of the section that renders on the bottom of each page
  return (
    <Navbar className="NavBarBottom" bg="dark" variant="dark" sticky="bottom">
      <Row>
        {/* first colom */}
        <Col className="footer-margin witcher-font">
          <div className="footer-nav-text">
            <h5>White Wolf Inc.</h5>
            <p>1-800-273-82550</p>
            <p> White Orchard, Novigrad</p>
            <p>Inn at the Crossroads</p>
          </div>
        </Col>
        {/* second colom */}
        <Col className="footer-margin witcher-font">
          <div className="footer-nav-text">
            <h4>Creators</h4>
            <p>Grand Master Vlad</p>
            <p> Eternal E-man</p>
            <p>#CodeCampers</p>
          </div>
        </Col>
        {/* last colom */}
        <Col>
          <Nav
            activeKey={location.pathname}
            className="flex-column footer-nav-text footer-margin witcher-font"
          >
            {/* links that navigate to the respective pages in sync with the header Navbar  */}
            <Nav.Link className="NavbarHover" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="NavbarHover" href="/Recipes">
              Recipes
            </Nav.Link>
            <Nav.Link className="NavbarHover" href="/Authors">
              Authors
            </Nav.Link>
            <Nav.Link className="NavbarHover" href="/Contact">
              Contact
            </Nav.Link>
            <Nav.Link className="NavbarHover" href="/Login">
              Login
            </Nav.Link>
          </Nav>
        </Col>
      </Row>

      <BackToTop />
    </Navbar>
  );
};
export default PageFooter;
