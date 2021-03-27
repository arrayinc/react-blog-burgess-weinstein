import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ContactModal() {
    const [show, setShow] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                    <Button variant="danger" onClick={handleClose}>
                        Close
        </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ContactModal;