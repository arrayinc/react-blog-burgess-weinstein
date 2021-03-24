import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lamb from "./food/Lamb.jpeg";
import Pizza from "./food/Pizza.jpeg";
import Wine from "./food/Wine.jpeg";

function RecipesHome() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={Lamb} alt="Rack of Lamb" />
        </Col>
        <Col>
          <img src={Pizza} alt="Pizza With Artichokes" />
        </Col>
        <Col>
          <img src={Wine} alt="Glass of Wine" />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>King's Court Lamb</p>
        </Col>
        <Col>
          <p>
            Villenmerth pizza
            <br />
            Topped With Shavings of Wyvern's Talons
          </p>
        </Col>
        <Col>
          <p>
            Mulled Mandrake Wine
            <br />
            (Ginger Spiced Wine)
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default RecipesHome;
