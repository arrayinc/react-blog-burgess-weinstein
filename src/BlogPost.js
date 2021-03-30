import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const BlogPost = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Image src={props.blogData.coverImg} />
        </Col>
        <Col>{props.blogData.title}
        <Row>{props.blogData.datePublished}</Row>
        <Row>{props.blogData.author.name}</Row>
        <Row>{props.blogData.description}</Row>
        <Row>{props.blogData.content}</Row>
        
        </Col>
      </Row>
    </Container>
  )
};

export default BlogPost;
