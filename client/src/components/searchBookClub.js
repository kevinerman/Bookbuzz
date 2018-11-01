import React from "react";
import "./styles.css";
import myAPI from "../utils/API";

export default class SearchClubForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchClubName: "",
      searchByBookNameByBook: "",
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
    




    myAPI
      .getClubs()
      .then(function(response) {
        let responseArray = response.data;
        let intro = "Your Book Club: "
        console.log(responseArray);
        let i = 0;
        responseArray.forEach(element => {
          let iDiv = document.createElement('div');
           
          iDiv.id = 'block'+i;
          // iDiv.className = 'block';
          // iDiv.className = 'col s12';
          document.getElementById("display_clubs").appendChild(iDiv);
          let s =  document.getElementById('block'+i);
          i++;
          s.append(intro);
          s.append(element.clubName);
          s.append(element.bookName);
          s.append(element.meetingDate);
          
        });
        

        // sort


        // document.getElementById("display_clubs").append("This is where all the clubs come");

      })
      .catch(function(error) {
        console.log(error);
        //Perform action based on error
      });
  }

  render() {
    return (
      <div>
        <h1> Search a Book Club</h1>
        <form idname="searchClubForm"  onSubmit={this.handleSubmit}>
       
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

          <input type="submit" value="Submit" className="btn btn-success"/>
        </form>
        <div id="display_clubs" className="row">
      
        </div>
      </div>
    );
  }
}
