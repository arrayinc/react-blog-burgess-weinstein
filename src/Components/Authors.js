import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const AuthorInfoSection = (props) => {
  return (
    <div className="author-info">
      <h1 className="author-name">{props.blogData.author.name}</h1>
      <h1 className="author-username">{props.blogData.author.username}</h1>
      <p className="author-about">{props.blogData.author.about}</p>
    </div>
  );
};

const Authors = (props) => {
  const [authorId, setAuthorId] = useState(0);
  return (
    <>
      <Container className="ContainerMargin">
        <h1 className="witcher-font AuthorHeader">
          Authors from the Continent
        </h1>
      </Container>
      <Container className="avatar-container">
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

      <Container className="bio-container">
        <AuthorInfoSection blogData={props.blogData[authorId]} />
      </Container>
    </>
  );
};
export default Authors;
