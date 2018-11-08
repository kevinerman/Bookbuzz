import React from "react";
import "../styles.css";
import myAPI from "../../utils/API";
import SearchResultItem from "../../components/BookClub/searchResultItem";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Button from './Button/Button';
// import BookClubPage from "./YourBookClub";

export default class SearchClubForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      searchClubName: "",
      searchByBookNameByBook: "",

      clubid: "",
      useradd: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({ value: event.target.value });
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addClubHandler = (event, id) => {
    console.log(id, "inside addclubhandler");
    console.log(localStorage.id_token, "local Storage User");

    let clubChangeData = {
      clubid: id,
      useradd: localStorage.id_token
    };

    // Here it should search all clubs and validate andf nest the line 57-61(updateclubs)  inside here
    myAPI
      .searchAllClubs(clubChangeData)
      .then(res =>
        res.data.forEach(function(element) {
          // console.log(element.clubMembers);
          console.log(element);

          if(element.clubMembers.length <1 ){
            myAPI
            .updateClubs(clubChangeData)
            .then(res => console.log(res))
            .catch(err => console.log(err));

          }

          element.clubMembers.forEach(function(e) {
            console.log(e);
            // localStorage.id_token === e
            //   ? alert("You are already a member!")
            //   : addClub();

            if (localStorage.id_token === e) {
              alert("You are already a member!")
            } else {
              alert("adding u to the club")
              myAPI
                .updateClubs(clubChangeData)
                .then(res => console.log(res))
                .catch(err => console.log(err));
            }
          });
        })
      )
      .catch(err => console.log(err));
  };

  handleSubmit(event) {
    event.preventDefault();

    // document.getElementById("display_clubs").innerHTML = "";

    let formData2 = {
      searchClubName: this.state.searchClubName,
      searchByBookNameByBook: this.state.searchByBookNameByBook
    };

    // console.log(formData2);

    if (!formData2.searchByBookNameByBook) {
      // console.log("in the no book name");
      myAPI.searchClubsByName(formData2).then(res => {
        // console.log(res.data);
        this.setState({
          searchResults: this.state.searchResults.concat(res.data)
        });
      });
    }
    //end of the search by club name
    else {
      // console.log("book named entered");
      myAPI.searchClubsByBook(formData2).then(res => {
        console.log(res.data);
        this.setState({
          searchResults: this.state.searchResults.concat(res.data)
        });
      });
    }
  }

  render() {
    let searched = <p> There are no book clubs to show</p>;
    if (this.state.searchResults.length > 0) {
      searched = this.state.searchResults.map((club, index) => {
        // console.log(club);
        return (
          <SearchResultItem
            key={club._id}
            clubId={club._id}
            clubName={club.clubName}
            bookName={club.bookName}
            meetingDate={club.meetingDate}
            action={this.addClubHandler}
          />
        );
      });
    }

    return (
      <div>
        <h1> Search a Book Club</h1>
        <form idname="searchClubForm" onSubmit={this.handleSubmit}>
          <p>Please Write Full Club Name</p>
          <p>tHingS arE CasE sEnsItIVe oUt here:</p>
          <label>
            Search Club Name: {"    "}
            <input
              type="text"
              value={this.state.searchClubName}
              onChange={this.handleChange}
              name="searchClubName"
            />
          </label>
          <br />
          <label>
            Search Club by Book:
            <input
              type="text"
              value={this.state.searchByBookNameByBook}
              onChange={this.handleChange}
              name="searchByBookNameByBook"
            />
          </label>
          <br />

          <br />

          <input
            type="submit"
            value="Submit"
            className="btn buttonClubCreate"
          />
        </form>
        <div id="display_clubs" className="row" />
        {searched}
      </div>
    );
  }
}
