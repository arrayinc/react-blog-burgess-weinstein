import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { AccountContext } from "./accountcontext";
import Local from "./localstorage";
//connects to Accountcontext to allow switch back and forth to sign up page
export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <Form className="login-form">
      <h4 className="signin-margin">Login</h4>
      <Local />

      <Button variant="danger" type="submit">
        Submit
      </Button>
      <div className="need-to-sign-up-q">
        <p>need to sign up? </p>
        <Button href="#" variant="danger" onClick={switchToSignup}>
          sign up
        </Button>
      </div>
    </Form>
  );
}
