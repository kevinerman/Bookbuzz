import React, { Component } from "react";
import AddBookClub from "../../components/AddBookClub";
import YourBookClub from "../../components/yourBookClub";
import SearchClubs from "../../components/searchBookClub";
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
        <br />
        <SearchClubs />
        <YourBookClub />
      </Wrapper>
      </div>
    );
  }
}

export default BookClub;
