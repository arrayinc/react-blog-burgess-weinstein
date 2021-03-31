import React from "react";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";

const BlogPost = (props) => {
  return (
    <>
      <Row>
        <Col>
        <Jumbotron className="witcher-font">
          <Container>
            <h1 className="Blog-Title">{props.blogData.title}</h1>
            <p className="Blog-Subtitle" >{props.blogData.description}</p>
          </Container>
        </Jumbotron>
        </Col>
        
      </Row>
      <Row>
        <Col>
          <Container className="blog-image-container">
            <Image className="blog-image" src={props.blogData.coverImg} />
          </Container>
        </Col>

        <Col>
          <Container>
            <Image
              className="circular--portrait"
              src={props.blogData.author.avatar}
              roundedCircle
            />
            <Row>{props.blogData.datePublished}</Row>
            <Row>{props.blogData.author.name}</Row>
            <Row>{props.blogData.author.username}</Row>
          </Container>
          <Container className="blog-content">
            <Row>{props.blogData.content}</Row>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default BlogPost;
