import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Slideshow } from "./Carousel";

const HomePage = (props) => {
  return (
    <>
      <Row>
        <Slideshow />
      </Row>
      <Row className="Blog-Previews-Row">
        {props.blogData.map((val, index) => (
          <Col key={val.id}>
            <Link className="Blog-Preview-Link" to={"/blogPost/" + val.id}>
            <Image className="Blog-Previews" src={val.coverImg} />
            <p className="Blog-Preview-Text witcher-font">{val.title}</p>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
