import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import Tavern from "../Images/Food/Tavern.gif";

// This builds the recipe index body and it's row of images by pulling on BlogData component information
const RecipesHome = (props) => {
  return (
    <>
      <div className="recipe-index-body">
        <Image class="tavern-image" width="1665" src={Tavern}></Image>
        <Container className="recipe-index-container">
          <Row className="recipe-index-row">
            {props.blogData.map((val, index) => (
              <Col key={val.id}>
                <Link className="Blog-Preview-Link" to={"/blogPost/" + val.id}>
                  <Image className="index-images" src={val.coverImg} />
                  <p className="Blog-Preview-Text witcher-font">{val.title}</p>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default RecipesHome;
