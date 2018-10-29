import React from "react";
import "./styles.css";

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
    alert("A book club name was submitted: " + this.state.clubName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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


