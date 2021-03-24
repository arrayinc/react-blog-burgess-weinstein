import React from "react";
import "./Authors.css";
import { Container, Row, Col} from "react-bootstrap";
import Geralt from "./AuthorPhotos/Geralt.jpg";
import Yennefer from "./AuthorPhotos/Yennefer.jpg";
import Jaskier2 from "./AuthorPhotos/Jaskier2.jpg";

function TheAuthors() {
  return (
    <Container>
      <Row>
        <Col>
          <img
            class="authors"
            src={Yennefer}
            alt="Woman sitting in portrait stance"
          />
        </Col>
        <Col>
          <img
            class="authors"
            src={Geralt}
            alt="Man with sword"
          />
        </Col>
        <Col> <img
          class="authors"
          src={Jaskier2}
          alt="Fantiful man in purple garb"
        /></Col>
      </Row>
      <Row>
        <Col>Yennefer-</Col>
        <Col>Geralt</Col>
        <Col>Jaskier</Col>
      </Row>
    </Container>
  );
}
export default TheAuthors;