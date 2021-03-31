import React from "react";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";

const BlogPost = (props) => {
  return (
    <section className="blog-post-body">
      <Row>
        <Col>
          <Jumbotron className="witcher-font blog-post-jumbotron">
            <Container>
              <h1 className="Blog-Title">{props.blogData.title}</h1>
              <p className="Blog-Subtitle">{props.blogData.description}</p>
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
              className="author-portrait"
              src={props.blogData.author.avatar}
              roundedCircle
            />
          </Container>
          <Container className="author-details witcher-font">
            <Row>{props.blogData.datePublished}</Row>
            <Row>{props.blogData.author.name}</Row>
            <Row>{props.blogData.author.username}</Row>
          </Container>
          <Container className="blog-ingredients-container">
            <Row className="blog-ingredients">{props.blogData.ingredients}</Row>
          </Container>
          <Container className="blog-content-container">
            <Row className="blog-content">{props.blogData.content}</Row>
          </Container>
        </Col>
      </Row>
    </section>
  );
};

export default BlogPost;
