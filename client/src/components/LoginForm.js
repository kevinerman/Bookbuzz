import React, { Component } from "react";
import Auth from "../Auth/Auth";

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
    const auth = new Auth();
    // console.log(this);
    console.log(auth);
    // const isAuthenticated = this.props.auth;

    auth.login();
    //axios will come here to check log in and use ternary operator to go to the next page.
    // <Redirect to="/home">Login</Redirect>
  }

  render() {
        // const isAuthenticated = this.props.auth;

    console.log(this.props.auth);


    return (
      <div>
        <div className="text-center">
          <h1> Log in! </h1>
        </div>
        <form>
          <br />
          {
              (!localStorage.access_token) ? (
                  <button
                  type="submit"
                  className="btn btn-outline-warning btn-lg btn-block"
                  onClick={this.handleSubmitForm}
                  >
                    Log In
                  </button>
                
              ):(
                  <button
                  type="submit"
                  className="btn btn-outline-warning btn-lg btn-block"
                  onClick={this.handleSubmitForm}
                  >
                    Log Out
                  </button>
                )
            }
        </form>
        <br /> <br />   <br /> 
        <div className="text-center">
          <h1> Register Here! </h1>
          <p> The email address will be your username </p>
        </div>
        <form>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect2">
              Example multiple select
            </label>
            <select
              multiple
              className="form-control"
              id="exampleFormControlSelect2"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>
        </form>
      </div>
    );
  }
}

//links and router to /login and /home
