import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slideshow from "./slideshow";

// This is the homepage, including the carousel and below it, a row of recipe images and titles pulled from the BlogData component. //
// The row of images resemble the one in RecipeIndex although vary in styling.//

const HomePage = (props) => {
  return (
    <div className="home-page-body">
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
    </div>
  );
};

export default HomePage;
