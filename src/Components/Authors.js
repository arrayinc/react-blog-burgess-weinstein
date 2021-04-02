import React, { useState } from "react";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";

const AuthorInfoSection = (props) => {
  return (
    <div className="author-info witcher-font">
      <h1 className="author-name ">{props.blogData.author.name}</h1>
      <h1 className="author-username ">{props.blogData.author.username}</h1>
      <p className="author-about">{props.blogData.author.about}</p>
    </div>
  );
};

const Authors = (props) => {
  const [authorId, setAuthorId] = useState(0);
  return (
    <div className="author-body">
      <Jumbotron className="author-header-jumbotron mb-5">
        <h1 className="witcher-font author-header-text">
          Authors from the Continent
        </h1>
      </Jumbotron>
      <Container>
        <Row>
          {props.blogData.map((val, index) => (
            <Col key={val.id}>
              <Image
                className="authors"
                onClick={() => setAuthorId(index)}
                src={val.author.avatar}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="author-bio-container">
        <AuthorInfoSection className="author-bio-text" blogData={props.blogData[authorId]} />
      </Container>
    </div>
  );
};
export default Authors;
