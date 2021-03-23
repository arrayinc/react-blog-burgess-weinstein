import React, { Component } from "react";
import "./index.css";
import { Jumbotron, Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

export class HomeTitle extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
    );
  }
}
