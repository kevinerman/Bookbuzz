import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";
import Wrapper from "../../components/Wrapper";


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
