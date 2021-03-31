import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const BlogPost = (props) => {
  return (
    <>
    <Col>
      <Container>
        
          <Image src={props.blogData.coverImg} />
       
      </Container>
      </Col>
      <Col></Col>
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
      <Container>
        <Row>{props.blogData.title}</Row>
        <Row>{props.blogData.description}</Row>
        <Row>{props.blogData.content}</Row>
      </Container>
      </Col>
    </>
  );
};

export default BlogPost;
