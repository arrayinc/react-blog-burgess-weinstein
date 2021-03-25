import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Wine from "./food/Wine.jpeg";

function WinePost() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={Wine} alt="Glass of Wine" />
        </Col>
        <Col>Here's the wine recipe.</Col>
      </Row>
    </Container>
  );
}
export default WinePost;
