import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handlePasswordChanged(event) {
    this.setState({ password: event.target.value });
  }

  handleUsernameChanged(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmitForm(event) {
    event.preventDefault();
    //axios will come here to check log in and use ternary operator to go to the next page.
    alert("We need to check for log in and redirect to the route");
    // <Redirect to="/home">Login</Redirect>
  }
  render() {
    return (
      <div>
        <hr />
        <hr />
        <hr />
        <hr />

        <form>
          <input
            placeholder="username"
            name="username"
            type="text"
            id="username"
            onChange={this.handleUsernameChanged.bind(this)}
          />
          <input
            placeholder="password"
            name="password"
            type="password"
            id="password"
            onChange={this.handlePasswordChanged.bind(this)}
          />
          <button onClick={this.handleSubmitForm}>submit</button>
        </form>
      </div>
    );
  }
}

//links and router to /login and /home
