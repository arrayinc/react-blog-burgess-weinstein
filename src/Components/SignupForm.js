import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { AccountContext } from "./AccountContext";

export function SignUpForm(props) {
    //allows switch to login page through use of AccountContext
  const { switchToSignin } = useContext(AccountContext);
//Content of the sign up fprm 
  return (
    <Form>
      <h2>Wish to Become a Witcher?</h2>
      <h4>Create a Username and password</h4>
      <Form.Group controlId="formName">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="username" placeholder="Enter UserName" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Sign-up
      </Button>
      <div className="already-member-q">
      <p>Already a member? </p>
      <Button variant="danger" href="#" onClick={switchToSignin}>
        Log in
      </Button>
      </div>
    </Form>
  );
}
