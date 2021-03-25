import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Lamb from "./food/Lamb.jpeg";
import Pizza from "./food/Pizza.jpeg";
import Wine from "./food/Wine.jpeg";

function RecipesHome() {
  return (
    <Container>
      <Row>
        <Col>
          <Link to="/LambPost">
            <img src={Lamb} alt="Rack of Lamb" />
          </Link>
        </Col>
        <Col>
          <Link to="/PizzaPost">
            <img src={Pizza} alt="Pizza With Artichokes" />
          </Link>
        </Col>
        <Col>
          <Link to="/WinePost">
            <img src={Wine} alt="Glass of Wine" />
          </Link>
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
