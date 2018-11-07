import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";
import Wrapper from "../../components/Wrapper";
import Book from "./image/books.jpeg";

import Bee from "../../components/Bee";

import Auth from "../../Auth/Auth";

console.log(Auth);

// const auth = new Auth();
// auth.login();


class Login extends Component {

  render() {
    return (
      <div>
        <hr />
        <hr />
        <hr />
        
        <Wrapper>
          <br></br>
          <img  src={Book} alt="book" />
        <Bee/>
        
        <LoginForm />

         </Wrapper>
      </div>
    );
  }
}

export default Login;
