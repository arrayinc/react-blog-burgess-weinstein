import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Letter from "./About/Letter.jpeg";

function ContactPage() {
  return (
    <Container className="ContainerMargin">
      <Row>
        <Col>
          <img src={Letter} alt="Letter and quill" className="Letter"/>
        </Col>
        <Col>
          Unfortunately, we are the ones who knock.
        </Col>
      </Row>
    </Container>
  );
}
export default ContactPage;
