import React from "react";
import "./styles.css";
import myAPI from "../utils/API";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clubName: "",
      bookName: "",
      meetingDate: ""
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
    alert(
      "' book club name was submitted: " +
        this.state.clubName +
        " book name " +
        this.state.bookName +
        " meeting date and time " +
        this.state.meetingDate
    );

    // const data = new FormData(event.target);
    // const data = document.getElementById("addClubForm");
    // let formData= new FormData(data);
    let formData = { clubName: this.state.clubName, bookName : this.state.bookName, meetingDate : this.state.meetingDate}

    console.log(formData);
    myAPI.postClubs(formData)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
        //Perform action based on error
      });
  }

  render() {
    return (
      <form idname="addClubForm" onSubmit={this.handleSubmit}>
        <label>
          Club Name:
          <input
            type="text"
            value={this.state.clubName}
            onChange={this.handleChange}
            name="clubName"
          />
        </label>
        <br />
        <label>
          Selected Book:
          <input
            type="text"
            value={this.state.bookName}
            onChange={this.handleChange}
            name="bookName"
          />
        </label>
        <br />
        <label>
          Meeting Date:
          <input
            type="text"
            value={this.state.meetingDate}
            onChange={this.handleChange}
            name="meetingDate"
          />
        </label>
        <br />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
