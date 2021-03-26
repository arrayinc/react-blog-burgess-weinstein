import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Letter from "./About/Letter.jpeg";

function ContactPage() {
  return (
    <Container className="ContainerMargin">
      <Row>
        <Col>
          <img src={Letter} alt="Letter and quill" className="Letter" />
        </Col>
        <Col>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Reason Why</Form.Label>
              <Form.Control as="select">
                <option>N/A</option>
                <option>You love the page</option>
                <option>Your Matt and wish to tell us how awesome we are</option>
                <option>Wish to go to the Continent</option>
                <option>Want to give us money</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Brief decription of why your contacting us today</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="danger" type="submit" onClick={() => { alert('Thanks for submitting!'); }}>
              Submit
  </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default ContactPage;
