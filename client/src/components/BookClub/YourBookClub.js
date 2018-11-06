import React, { Component } from "react";

export default class BookClubPage extends Component {
  constructor() {
    super();
    this.state = {
      // club_id: ""
    };
  }


  render() {
    return (
      <div className="rounded" style={{ background: "	" }}>
        <h4>Book Club Name Comes Here</h4>
        <div className="row">
          <button className="buttonClubCreate">Club Info</button> {`         `}
          <button className="buttonClubCreate">Book Info</button> {`         `}
          <button className="buttonClubCreate">Discussion</button>
        </div>
        <div className="row">
          <div
            className="col s6 m6 rounded"
            style={{background: "light blue", color: "#8b4513"}}
          >
            <p style={{color: "black"}}> Welcome to Discussion Page </p>

            <div style={{color: "pink"}}>
             

              <form>
                <div className="form-group">
                  <label for="postDiscussion">Post Discussion</label>
                  <input
                    type="textbox"
                    name="postDiscussion"
                    className="form-control"
                    id="postDiscussion"
                    aria-describedby="disc help"
                    placeholder="Post a comment or discussion here"
                    // onChange={this.handleUsernameChanged.bind(this)}
                  />
                </div>
                <br />

                <input
                  type="submit"
                  value="Post Now!"
                  className="btn buttonClubCreate"
                />
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
