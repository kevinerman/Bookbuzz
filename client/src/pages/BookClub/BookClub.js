import React, { Component } from "react";
import AddBookClub from "../../components/AddBookClub";
import YourBookClub from "../../components/yourBookClub";
import SavedBooks from "../../components/savedBooks";
import Wrapper from "../../components/Wrapper";

class BookClub extends Component {
  render() {
    return (
      <div>
        <hr />
        <hr />
        <hr />
      
      <Wrapper>
        <AddBookClub />
        <SavedBooks />
        <YourBookClub />
      </Wrapper>
      </div>
    );
  }
}

export default BookClub;
