import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ContactModal from "./Modal";

function ContactPage() {
  return (
    <div className="transparent">
      <Container>
        <Row>
          <Col>
            <Form className="form-container">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label><h3>Email</h3></Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label><h3>What's up?</h3></Form.Label>
                <Form.Control as="select">
                  <option>Just saying thanks</option>
                  <option>Recipe suggestion</option>
                  <option>
                    Toss a coin to your blogger
            </option>
                  <option>Wish to go to the Continent</option>
                  <option>Press and Media</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>
                  <h4>Brief description of why you're contacting us today</h4>
                </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <>
                <ContactModal />
              </>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ContactPage;
