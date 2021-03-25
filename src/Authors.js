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
        <Col>Yennefer  <br /> Born into poverty yet now here she stands as advisor to kings and Witchers alike. A massive fan of the finer things in life, Yennefer graces readers with some of the best dishes she has tasted at kings banquets. Should you find yourself in a Kings Court surely you’ll become acquainted.  </Col>
        <Col>Geralt of Rivia <br /> Geralt is a Witcher from the School of the Wolf . Though his backstory may be filled with darkness and very little happiness he manages to find slivers of happiness on the Continent where he has met friends such as Jaskier and Yennefer. Geralt doesn’t talk much, but that hasn’t stopped him from giving his take on some of the culinary experiences he's enjoyed on his travels . If ever you find a monter near home, simply “Toss a coin to your Witcher”</Col>
        <Col>Jaskier  <br /> Although he is not one to talk about himself, you've most likely heard endless recounts of his adventures with Geralt of Rivia, he is a humble bard after all. Having performed in many courts and tasted delicacies all across the Continent, Jaskier (aka Dandelion) was overjoyed to help school readers on some of the best dining he has experienced.</Col>
      </Row>
    </Container>
  );
}
export default TheAuthors;