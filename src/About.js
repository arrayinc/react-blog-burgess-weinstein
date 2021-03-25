import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Books from "./About/Books.jpeg";

function AboutPage() {
  return (
    <Container className="ContainerMargin">
      <Row>
        <Col>
          <img
            src={Books}
            alt="Books wrapped in spiderwebs"
            className="Books"
          />
        </Col>
        <Col>
          About The White Wolf <br /> How did it come about?
          <br />
          How did it get here?
          <br />
          Does it know things?
          <br /> Let's find out!
        </Col>
      </Row>
    </Container>
  );
}
export default AboutPage;
