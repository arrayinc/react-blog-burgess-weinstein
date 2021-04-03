import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
// button that sends a pop up message in response to button click event
//sets the default state of the modal to be dormant/unfired
function ContactModal() {
  const [show, setShow] = useState();
// sets the functions so that the message and pop up doesnt show until the event is fired
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Start of what renders
  return (
    <>
      <Button variant="danger" onClick={() => handleShow()}>
        Submit
      </Button>

      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your message has been sent!</Modal.Body>
        <Modal.Footer>
          <Button href="/Contact" variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ContactModal;
