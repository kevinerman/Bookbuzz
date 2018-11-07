import React, {Component} from "react";
// import Auth from "../Auth/Auth";

// getProfile(event){
//
// }

const Profile = props => (
  <div>
    <div className="text-center">
      <h1>Welcome Back </h1>

      <p>Update your Info</p>
    </div>
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          name="username"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
          placeholder="Enter email"

        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
            </small>
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="password"
          placeholder="Password"

        />
      </div>
      <br />
      <button
        type="submit"
        className="btn btn-outline-warning btn-lg btn-block"

      >
        Submit
          </button>
    </form>


    <br /> <br />   <br />


    <div className="text-center">
      <h1> Books & Clubs </h1>
      <p>Here are you're current books and clubs </p>
    </div>
    <ol>
      <li>1.</li>
      <li>2.</li>
      <li>3.</li>
    </ol>


  </div>
);

export default Profile;