import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import ProfilePg from "../../components/Profile/ProfilePg";
// import Auth from "../../Auth/Auth";
class Profile extends Component {
  render() {
    return (
      <div>
        <hr />
        <hr />
        <hr />
        <Wrapper>
          <ProfilePg />
        </Wrapper>
      </div>
    );
  }
}

export default Profile;
