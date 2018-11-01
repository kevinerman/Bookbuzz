import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";
import Wrapper from "../../components/Wrapper";
import Auth from "../../Auth/Auth";

console.log(Auth);

const auth = new Auth();
auth.login();

class Login extends Component {
  render() {
    return (
      <div>
        <hr />
        <hr />
        <hr />
        <Wrapper>
        <LoginForm />

         </Wrapper>
      </div>
    );
  }
}

export default Login;
