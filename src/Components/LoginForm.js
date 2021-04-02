import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { AccountContext } from "./AccountContext";
import  Local  from './LocalStorage';

export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext);

    return (
        <Form>
            <h4 className="spacer">Please sign in</h4>
            <Local />
            {/* <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group> */}

            {/* <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">

            </Form.Group> */}
            <Button  variant="danger" type="submit">
                Submit
            </Button>
            <p>need to sign up? </p>
            <Button href="#" variant="danger" onClick={switchToSignup}>sign up</Button>
            
        </Form>
    )
};