import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "./food/Pizza.jpeg";

function PizzaPost() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={Pizza} alt="A Pizza Pie" />
        </Col>
        <Col>What a splendid pie, Pizza-pizza pie,</Col>
      </Row>
    </Container>
  );
}
export default PizzaPost;
