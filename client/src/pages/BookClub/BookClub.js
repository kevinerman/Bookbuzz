import React, { Component } from "react";
import AddBookClub from "../../components/BookClub/AddBookClub";
import SearchBookClub from "../../components/BookClub/searchBookClub";
import Books from "./image/clubs.jpg";


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
        <div className="text-center">
        <img className="" src={Books} alt="book" />
        </div>
      
        <AddBookClub />
        <br/><br/>    
        <SearchBookClub />
        
      </Wrapper>
      </div>
    );
  }
}

export default BookClub;
