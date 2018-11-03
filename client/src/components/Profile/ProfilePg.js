import React from "react";


const Profile = props => (
  <div>
    <div className="text-center">
      <h1>Welcome Back (UserName) </h1>
      {/* <p>Update your Info</p> */}
  

    </div>

    <br /> <br />   <br />


    <div className="text-center">
      <h1> Books & Clubs </h1>
    </div>

    <ol>
      <h3>Books</h3>
      <li> Book 1 </li>
      <li> Book 2 </li>
      <li> Book 3 </li>
    </ol>
    <ol>
      <h3>Clubs</h3>
      <li> Club1 </li>
      <li> Club2 </li>
      <li> Club3 </li>
    </ol>


  </div>
);

export default Profile;