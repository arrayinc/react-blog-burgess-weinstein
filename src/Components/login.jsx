import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AccountContainer } from "./accountcontainer";

export default class SignIn extends Component {

  render() {
    return (
      <div className="signup-backdrop-image">
        <Container>
          <Row>
            <Col>
              <AccountContainer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
