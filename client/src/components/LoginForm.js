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
        <div className="text-center">
          <h1> Log in! </h1>
          {/* <p> The email address will be your username </p> */}
        </div>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="username"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.handleUsernameChanged.bind(this)}
            />
            {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={this.handlePasswordChanged.bind(this)}
            />
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-outline-warning btn-lg btn-block"
            onClick={this.handleSubmitForm}
          >
            Submit
          </button>
        </form>
        <br /> <br /> <br />
        <div className="text-center">
          <h1> Register Here! </h1>
          <p> The email address will be your username </p>
        </div>
        <form>
          <div className="form-group">
            <label for="email_register">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email_register"
              placeholder="name@example.com"
            />
          </div>

          <div className="form-group">
            <label for="password_register">Password</label>
            <input
              type="password"
              name="password_register"
              className="form-control"
              id="password_register"
              placeholder="Password"
              // onChange={this.handlePasswordInput.bind(this)}
            />
          </div>

          <div className="form-group">
            <label for="fname_register">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fname_register"
              placeholder="name@example.com"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlFile1">Example file input</label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-outline-warning btn-lg btn-block"
            // onClick={this.handleRegistrationForm}
          >
            Register NOW!
          </button>
        </form>
      </div>
    );
  }
}

//links and router to /login and /home
