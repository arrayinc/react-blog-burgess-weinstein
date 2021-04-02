import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AccountBox } from "./AccountContainer";

export default class SignIn extends Component {
  state = {
    user: "",
    rememberMe: false,
  };

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { user, rememberMe } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("user", rememberMe ? user : "");
  };
  componentDidMount() {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const user = rememberMe ? localStorage.getItem("user") : "";
    this.setState({ user, rememberMe });
  }

  render() {
    return (
      <div className="signup-backdrop-image">
        <Container>
          <Row>
            <Col>
              <AccountBox />
              {/* Commented out for presentation DO NOT DELETE 
         <form onSubmit={this.handleFormSubmit}>
          <label>
            User: <input name="user" value={this.state.user} onChange={this.handleChange} />
          </label>
          <label>
            <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox" /> Remember me
    </label>
          <button variant="danger" type="submit">Sign In</button>
        </form> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
