import React, { Component } from "react";

//sets the original so it can recognize a change to the keys
export default class Local extends Component {
  state = {
    user: "",
    rememberMe: false,
  };
  //looking for if the checkbox has been clicked to fire an event of an input name
  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };
  //sets the value to the local storage  and saves the changed input
  handleFormSubmit = () => {
    const { user, rememberMe } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("user", rememberMe ? user : "");
  };
  //gets the info from local storage to autofill the content related to the found key
  componentDidMount() {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const user = rememberMe ? localStorage.getItem("user") : "";
    this.setState({ user, rememberMe });
  }
  //this is the front end that shows up on the page and listens for change events to username and/or remember me
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
      </form>
    );
  }
}
