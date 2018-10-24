import React, { Component } from "react";
import AddBookClub from "../../components/AddBookClub";
import YourBookClub from "../../components/yourBookClub";
import SearchBookClub from "../../components/searchBookClub";
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
        <SearchBookClub />
        <YourBookClub />
      </Wrapper>
      </div>
    );
  }
}

export default BookClub;
