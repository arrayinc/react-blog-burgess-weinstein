import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AccountBox } from "./AccountContainer";

export default class SignIn extends Component {

  render() {
    return (
      <div className="signup-backdrop-image">
        <Container>
          <Row>
            <Col>
              <AccountBox />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
