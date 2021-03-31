import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Books from "../Images/About/Books.jpeg";

function SignUp() {
  return (
    <Container className="sign-up-container">
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
          <br /> Sign up and find out!
        </Col>
      </Row>
    </Container>
  );
}
export default SignUp;
