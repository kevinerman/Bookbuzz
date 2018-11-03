import React, { Component } from "react";
import YourBookClubPage from "../../components/YourBookClub"; // will be removed from here to its page
import Wrapper from "../../components/Wrapper";

class BookClub extends Component {


  constructor(props) {
    super(props);

    this.state = {
      clubName: "",
      bookName: "",
      meetingDate: ""
    };

  }



  render() {
    return (
      <div>
        <hr />
        <hr />
        <hr />
      
      <Wrapper>
        <YourBookClubPage/>
      </Wrapper>
      </div>
    );
  }
}

export default BookClub;
