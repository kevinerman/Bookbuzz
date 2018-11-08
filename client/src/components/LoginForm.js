import React, { Component } from "react";
import Auth from "../Auth/Auth";
import button from "./BookScraped/Button/Button";
import About from "./About/About";
import book from "./images/boooks.png";
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
        auth.logout()
    }

    handleUsernameChanged(event) {
        this.setState({ username: event.target.value });
    }




    handleSubmitForm(event) {
        event.preventDefault();
        const auth = new Auth();
        // console.log(this);
        console.log(auth);
        auth.login()

        // const isAuthenticated = this.props.auth;

    }

    render() {
        // const isAuthenticated = this.props.auth;

        console.log(this.props.auth);


        return (
            <div>
               <img className="card-img-top" src={book} alt="book" />          

                <div className="text-center">
                    {/* <h1> Log in! </h1> */}
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
              <br />

                <div className="text-center">
                    <h1> Welcome To BookBuzz</h1>

                    <p>
                        BookBuzz is an application created for users to find new books to
                        read, save for later, create book clubs and join clubs based on
                        their reading interests. It is a fun interactive app for users to
                        connect with others who share the same interest in books. The
                        inspiration behind this app was to create a platform for book
                        lovers to come together and connect.
            </p>
                </div>
                <br />
                <h3 className="text-center">Our Developers</h3>
                <About />
            </div>
        );
    }
}

//links and router to /login and /home
