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
                <Form.Label><h3>Email address</h3></Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label><h3>Reason Why</h3></Form.Label>
                <Form.Control as="select">
                  <option>N/A</option>
                  <option>You love the page</option>
                  <option>
                    You are Matt and/or Steven and wish to tell us how awesome we are
            </option>
                  <option>Wish to go to the Continent</option>
                  <option>Want to give us money</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>
                  <h4>Brief decription of why you're contacting us today</h4>
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
