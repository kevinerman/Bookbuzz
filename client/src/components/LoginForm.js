import React, { Component } from "react";
import Auth from "../Auth/Auth";
import button from "./BookScraped/Button/Button";

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
  logout(event) {
    const auth = new Auth();
    auth.logout();
  }

  handleUsernameChanged(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmitForm(event) {
    event.preventDefault();
    const auth = new Auth();
    // console.log(this);
    console.log(auth);
    auth.login();

    // const isAuthenticated = this.props.auth;
  }

  render() {
    // const isAuthenticated = this.props.auth;

    console.log(this.props.auth);

    return (
      <div>
        
        <form>
          <br />
          {!localStorage.access_token ? (
            <button
              type="submit"
              className="btn btn-outline-warning btn-lg btn-block"
              onClick={this.handleSubmitForm}
            >
              Log In
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-outline-warning btn-lg btn-block"
              onClick={this.logout}
            >
              Log Out
            </button>
          )}
        </form>
        <br />
      </div>
    );
  }
}

//links and router to /login and /home
