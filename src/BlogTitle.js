import React, { Component } from "react";
import "./index.css";
import { Jumbotron, Container } from "react-bootstrap";

export class BlogTitle extends Component {
  render() {
    return (
      <Jumbotron fluid className="Jumbotron">
        <Container>
          <h1 className="Title witcher-font">The White Wolf</h1>
          <h2 className="Subtitle witcher-font">On the hunt for recipes...</h2>
        </Container>
      </Jumbotron>
    );
  }
}
