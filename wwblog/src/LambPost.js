import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lamb from "./food/Lamb.jpeg";

function LambPost() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={Lamb} alt="Rack of Lamb" />
        </Col>
        <Col>Here's the recipe for lamb, don't mess it up!</Col>
      </Row>
    </Container>
  );
}
export default LambPost;
