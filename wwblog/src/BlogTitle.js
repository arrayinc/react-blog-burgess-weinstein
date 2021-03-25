import React, { Component } from "react";
import "./index.css";
import { Jumbotron, Container } from "react-bootstrap";

export class BlogTitle extends Component {
  render() {
    return (
      <Jumbotron fluid ClassName="Jumbotron">
        <Container>
          <h1>The White Wolf</h1>
          <p>
            On the hunt for recipes...
          </p>
        </Container>
      </Jumbotron>
    );
  }
}
