import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";
import Wrapper from "../../components/Wrapper";

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
        <Bee/>
        
        <LoginForm />

         </Wrapper>
      </div>
    );
  }
}

export default Login;
