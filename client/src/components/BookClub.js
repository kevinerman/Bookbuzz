import React, { Component } from "react";

export default class BookClubPage extends Component {
  constructor() {
    super();
    this.state = {
      clubName: ""
    };
  }

  render() {
    return (
      <div className="rounded" style={{ background: "	#F0F8FF" }}>
        <div className="row">
          <button className="buttonClubCreate">Club Info</button> {`         `}
          <button className="buttonClubCreate">Book Info</button> {`         `}
          <button className="buttonClubCreate">Discussion</button>
        </div>
        <div className="row">
          <div
            className="col s6 m6 rounded"
            style={{ background: "pink", color: "#8b4513" }}
          >
            <p> Discussion Page </p>

            <div style={{ color: "pink" }}>
              <p> hello</p>

              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="textbox"
                    name="username"
                    className="form-control"
                    id="username"
                    aria-describedby="emailHelp"
                    placeholder="Enter some text"
                    // onChange={this.handleUsernameChanged.bind(this)}
                  />
                  
                </div>
                <br />

          <input  type="submit" value="Submit" className="btn buttonClubCreate"/>
              </form>
              <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
