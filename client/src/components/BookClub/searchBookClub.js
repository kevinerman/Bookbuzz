import React from "react";
import "../styles.css";
import myAPI from "../../utils/API";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Button from './Button/Button';
import BookClubPage from "./YourBookClub";

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

  handleClub(params) {
    console.log(params);
  }

  handleSubmit(event) {
    event.preventDefault();

    document.getElementById("display_clubs").innerHTML = "";
    //IF CLUBNAME IS TRUE THEN DO THIS OR DO THIS (LET BOOKDEFAULT="HARRY POTTER")
    // needs to take input

    let formData2 = {
      searchClubName: this.state.searchClubName,
      searchByBookNameByBook: this.state.searchByBookNameByBook
    };

    if (!formData2.searchByBookNameByBook) {
       
      myAPI.searchClubsByName(formData2).then(res => {
        console.log(res.data); //array of data
        let i = 0;
        res.data.forEach(element => {
          console.log(element);

          let iDiv = document.createElement("div");
          iDiv.id = "block" + i;
          document.getElementById("display_clubs").appendChild(iDiv);

          let s = document.getElementById("block" + i);
          i++;
          // add information of the matching clubs
          s.append("Your Book Club: ");
          s.append(element.clubName);
          s.append(".  Book Discussed: ");
          s.append(element.bookName);
          s.append(".  Meeting Date/Frequency: ");
          s.append(element.meetingDate);

          //dynamic button added to each search array content
          var newBtn = document.createElement("button");
          var newContent = document.createTextNode("Join Bookclub!");
          newBtn.appendChild(newContent);
          newBtn.setAttribute("class", "buttonClubCreate");
          newBtn.id = element._id;
          newBtn.value = element._id;
          s.appendChild(newBtn);
          s.append(`
              
              `);

          newBtn.onclick = function(event) {
            console.log("hello add me to club please", event.target.id); // add a function to route to the elemenet.id

            myAPI.updateClubs(element)
            .then( function(response) {
              console.log("inside add club update: ", response);
            })
            .catch(function(error) {
              console.log(error);
            });
          };
        });
      });





    }
    //end of the search by club name
    else {
      myAPI.searchClubs(formData2).then(res => {
        console.log(res.data); //array of data
        let i = 0;
        res.data.forEach(element => {
          console.log(element);

          let iDiv = document.createElement("div");
          iDiv.id = "block" + i;
          document.getElementById("display_clubs").appendChild(iDiv);

          let s = document.getElementById("block" + i);
          i++;
          // add information of the matching clubs
          s.append("Your Book Club: ");
          s.append(element.clubName);
          s.append(".  Book Discussed: ");
          s.append(element.bookName);
          s.append(".  Meeting Date/Frequency: ");
          s.append(element.meetingDate);

          //dynamic button added to each search array content
          var newBtn = document.createElement("button");
          var newContent = document.createTextNode("Join Bookclub!");
          newBtn.appendChild(newContent);
          newBtn.setAttribute("class", "buttonClubCreate");
          newBtn.id = element._id;
          newBtn.value = element._id;
          s.appendChild(newBtn);
          s.append(`
              
              `);

          newBtn.onclick = function(event) {
            console.log("hello add me to club please", event.target.id); // add a function to route to the elemenet.id

            // myAPI.updateClubs(element._id)
            // .then( function(response) {
            //   console.log("inside add club update: ", response);
            // })
            // .catch(function(error) {
            //   console.log(error);
            // });
          };
        });
      });
    }
  }

  render() {
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
        <Router>
          <Switch>
            <Route path="/bookclub/:Clubid" component={BookClubPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
