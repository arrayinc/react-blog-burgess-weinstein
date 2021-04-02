import React from "react";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";

const BlogPost = (props) => {
  return (
    <section className="blog-post-body">
      <Row>
        <Col>
          <Jumbotron className="blog-post-jumbotron">
            <Container>
              <h1 className="Blog-Title greatprimer-font">
                {props.blogData.title}
              </h1>
              <p className="Blog-Subtitle greatprimer-font">
                {props.blogData.description}
              </p>
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
          <Container className="author-block">
            <Container>
              <a href="/Authors">
                <Image
                  className="author-portrait"
                  src={props.blogData.author.avatar}
                  roundedCircle
                />
              </a>
            </Container>

            <Container className="author-details greatprimer-font">
              <Row>Published by</Row>
              <Row>{props.blogData.author.username}</Row>
              <Row>{props.blogData.author.name}</Row>
              <Row>{props.blogData.datePublished}</Row>
            </Container>
          </Container>
          <Container className="blog-ingredients-container scrollbar">
            <Row className="blog-ingredients greatprimer-font scrollbar">
              {props.blogData.ingredients}
            </Row>
          </Container>
          <Container className="blog-content-container scrollbar">
            <Row className="blog-content greatprimer-font">
              {props.blogData.content}
            </Row>
          </Container>
        </Col>
      </Row>
    </section>
  );
};

export default BlogPost;
