import React from "react";
import "../styles.css";
import myAPI from "../../utils/API";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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

              var newBtn = document.createElement("button");
              var newContent = document.createTextNode("Go to clubpage");
              newBtn.appendChild(newContent);
              newBtn.setAttribute("class", "buttonClubCreate");
              newBtn.id = element._id;

              s.appendChild(newBtn);
              newBtn.onclick = function() {
                console.log("hello"); // add a function to route to the elemenet.id
                
              };

              // <Button title='Go to ClubPage' clicked={(event) => this.action(event, element._id)} />
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
              console.log("*&#*&#*&#", element._id);
              let iDiv = document.createElement("div");
              iDiv.id = "block" + i;
              document.getElementById("display_clubs").appendChild(iDiv);

              let s = document.getElementById("block" + i);
              i++;
              s.append(intro);
              s.append(element.clubName);
              s.append(element.bookName);
              s.append(element.meetingDate);

              var newBtn = document.createElement("button");
              var newContent = document.createTextNode("Add Bookclub!");
              newBtn.appendChild(newContent);
              newBtn.setAttribute("class", "buttonClubCreate");

              // newBtn.onclick(console.log("hello"));
              newBtn.id = element._id;

              // newBtn.setAttribute("value", element._id);
              // newBtn.setAttribute("to", `/bookclub/` + element._id);
              newBtn.value = element._id;

              // let clubLink = <Link to = "/bookclub2/"   />
              // clubLink.to= `/bookclub/` + element._id ;

              s.appendChild(newBtn);
              // newBtn.addEventListener("click", console.log("hello"));

              newBtn.onclick = function() {
                console.log("hello"); // add a function to route to the elemenet.id
                





              };
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
