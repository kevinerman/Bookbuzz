import React, { Component } from "react";
import AddBookClub from "../../components/AddBookClub";
import SearchBookClub from "../../components/searchBookClub";
import BookClubPage from "../../components/BookClub"; // will be removed from here to its page
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
        <AddBookClub />
       <br/>    <br/>    
        <SearchBookClub />
        <BookClubPage/>
      </Wrapper>
      </div>
    );
  }
}

export default BookClub;
