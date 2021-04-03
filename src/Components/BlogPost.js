import React from "react";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";

// This is the template for the blog posts. It generates the recipes found in the dropdown navbar button by pulling text from BlogData //

const BlogPost = (props) => {
  return (
    <section className="blog-post-body">
      {/* blog-post-body above generates the background Parchment image linked in index.css */}
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
      {/* coverImg is the main food picture displayed when viewing a recipe */}
      <Row>
        <Col>
          <Container className="blog-image-container">
            <Image className="blog-image" src={props.blogData.coverImg} />
          </Container>
        </Col>

        <Col>
          <Container className="author-block">
            {/* The author's avatar is contained separately from their details to allow for more specific positioning and styling */}
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
          {/* Classes below container the word container are used in index.css to shape the container itself, not the text within */}
          <Container className="blog-ingredients-container">
            <Row className="blog-ingredients greatprimer-font">
              {props.blogData.ingredients}
            </Row>
          </Container>
          <Container className="blog-content-container">
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
