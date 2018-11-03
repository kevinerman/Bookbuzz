import React from "react";
import "./styles.css";
import myAPI from "../utils/API";

export default class SearchClubForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchClubName: "",
      searchByBookNameByBook: ""
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

  handleSubmit(event) {
    event.preventDefault();

    //IF CLUBNAME IS TRUE THEN DO THIS OR DO THIS (LET BOOKDEFAULT="HARRY POTTER")
    // needs to take input

    let formData2 = {
      searchClubName: this.state.searchClubName,
      searchByBookNameByBook: this.state.searchByBookNameByBook
    };

    // console.log("hello", formData2.searchClubName);
    console.log("hello2", formData2.searchByBookNameByBook);

    if (!formData2.searchByBookNameByBook) {
      myAPI
        .getClubs()
        .then(function(response) {
          let responseArray = response.data;
          let intro = "Your Book Club: ";
          console.log(responseArray);
          let i = 0;
          responseArray.forEach(element => {
            if (!element.clubName) {
              element.clubName = "Harry Potter";
            }

            if (element.clubName.includes(formData2.searchClubName)) {
              let iDiv = document.createElement("div");
              iDiv.id = "block" + i;
              document.getElementById("display_clubs").appendChild(iDiv);

              let s = document.getElementById("block" + i);
              i++;
              s.append(intro);
              s.append(element.clubName);
              s.append(element.bookName);
              s.append(element.meetingDate);
            }
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    //end of the search by club name
    else {
      // search by book name

      myAPI
        .getClubs()
        .then(function(response) {
          let responseArray = response.data;
          let intro = "Your Book Club: ";
          console.log(responseArray);
          let i = 0;
          responseArray.forEach(element => {
            if (!element.bookName) {
              element.bookName = "Potter";
            }

            if (element.bookName.includes(formData2.searchByBookNameByBook)) {
              let iDiv = document.createElement("div");
              iDiv.id = "block" + i;
              document.getElementById("display_clubs").appendChild(iDiv);

              let s = document.getElementById("block" + i);
              i++;
              s.append(intro);
              s.append(element.clubName);
              s.append(element.bookName);
              s.append(element.meetingDate);
            }
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div>
        <h1> Search a Book Club</h1>
        <form idname="searchClubForm" onSubmit={this.handleSubmit}>
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

          <input type="submit" value="Submit" className="btn buttonClubCreate" />
        </form>
        <div id="display_clubs" className="row" />
      </div>
    );
  }
}
