import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ContactModal from "./Modal";

function ContactPage() {
  return (
    <div className="transparent">

      <Form className="form-container">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Reason Why</Form.Label>
          <Form.Control as="select">
            <option>N/A</option>
            <option>You love the page</option>
            <option>
              You are Matt and wish to tell us how awesome we are
            </option>
            <option>Wish to go to the Continent</option>
            <option>Want to give us money</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            Brief decription of why you're contacting us today
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <>
          <ContactModal />
        </>
      </Form>
    </div>


  );
}
export default ContactPage;
