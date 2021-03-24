import React from "react";
import { Nav } from "react-bootstrap";

const PageFooter = () => {
  return (
    <div className="bottom">
      <div className="btm-container">
        <div classname="row">{/* first column */}</div>
        <div className="col">
          <h4>White Wolf INC.</h4>
          <ul classname="contact-info">
            <li>1-800-273-825</li>
            <li>White Orchard, Novigrad</li>
            <li>Inn at the Crossroads</li>
          </ul>
        </div>
        <div className="col">
          <h4>Creators</h4>
          <ul classname="contact-info">
            <li>Grand Master Vlad</li>
            <li>Eternal E-man</li>
            <li>Campers</li>
          </ul>
        </div>
        <div className="col">
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link href="/Authors">Authors</Nav.Link>
            <Nav.Link href="/Recipes">Recipes</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
        </div>
      </div>
      <hr />
      <p>
        &copy;{new Date().getFullYear()} White Wolf Inc.| All Rights Reserved |
        Not liable for Nekker attacks
      </p>
    </div>
  );
};
export default PageFooter;
