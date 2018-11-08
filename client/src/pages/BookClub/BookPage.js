import React, { Component } from "react";
import YourBookClub from "../../components/BookClub/YourBookClub"; // will be removed from here to its page
import Wrapper from "../../components/Wrapper";

class BookClub extends Component {


  constructor(props) {
    super(props);

    this.state = {
      clubid: this.props.match.params

    };

    console.log(this.state.clubid);
  }


x
  render() {
    return (
      <div>
        <hr />
        <hr />
        <hr />
      
      <Wrapper>
        <YourBookClub 
        key={this.state.clubid} 
        clubId={this.state.clubid} 
        //pass the id of the clubpage
        />
      </Wrapper>
      </div>
    );
  }
}

export default BookClub;
