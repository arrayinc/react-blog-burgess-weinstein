import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { Slideshow } from "./Carousel";

const HomePage = (props) => {
  return (
    <>
      <Row>
        <Slideshow />
      </Row>
      <br />
      <Row className="Blog-Previews-Row">
        {props.blogData.map((val, index) => (
          <Col key={val.id}>
            <Image className="Blog-Previews" src={val.coverImg} />
            <p>{val.title}</p>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
