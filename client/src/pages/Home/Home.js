import React, { Component } from "react";
import SearchResultContainer from "../../components/SearchResultContainer";
import Wrapper from "../../components/Wrapper";

class Home extends Component {
  render() {
    return (
      <div>
        <hr />
        <hr />
        <hr />
      
      <Wrapper>
      
      <div>
        <SearchResultContainer />
      </div>
      
      </Wrapper>
      </div>
    );
  }
}

export default Home;
