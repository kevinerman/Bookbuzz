import React, { Component } from "react";
import YourBookClubPage from "../../components/BookClub/YourBookClub"; // will be removed from here to its page
import Wrapper from "../../components/Wrapper";

class BookClub extends Component {


  constructor(props) {
    super(props);

    this.state = {
      // clubis: this.params.id
    };

  }



  render() {
    return (
      <div>
        <hr />
        <hr />
        <hr />
      
      <Wrapper>
        <YourBookClubPage  
        //pass the id of the clubpage
        />
      </Wrapper>
      </div>
    );
  }
}

export default BookClub;
