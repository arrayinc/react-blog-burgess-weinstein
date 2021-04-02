import React, { Component } from "react";

export default class Local extends Component {
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
      <form onSubmit={this.handleFormSubmit}>
        <label className="form-margins form-margin-right">
          User:{" "}
          <input
            placeholder="Username"
            name="user"
            value={this.state.user}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          <input
            name="rememberMe"
            checked={this.state.rememberMe}
            onChange={this.handleChange}
            type="checkbox"
          />{" "}
          Remember me
        </label>
        <br />
        <label controlId="formBasicPassword" className="form-margin-right">
          Password:{" "}
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
          />
        </label>
        <label></label>
        {/* <button type="submit">Sign In</button> */}
      </form>
    );
  }
}
