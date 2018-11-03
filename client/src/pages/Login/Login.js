import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";
import Wrapper from "../../components/Wrapper";
import Bee from "../../components/Bee";

class Login extends Component {
  render() {
    return (
      <div>
        <hr />
        <hr />
        <hr />
        
        <Wrapper>
        <Bee/>
        
        <LoginForm />
       
         </Wrapper>
      </div>
    );
  }
}

export default Login;
