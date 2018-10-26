import React from "react";

const YourClub = props => (
  <div>
      <h1>Your Clubs</h1>
      <ul> 

        <h5>You are a member of the following clubs</h5>
        <h6>Click on any club to see discussions that have taken place</h6>
        <li> Harry Potter Fan Club</li>
        <li> Hermoine Fan Club</li>
        <li> Voldemort Fan Club</li>
        <li> Hagrid Fan Club</li>


      </ul>

      <div className="clubBox"> This is where each club information will go

        <div> Discussion Chat/Thread and Chat box</div>


        <div> Important Notes</div> 
        

      </div>
  </div>
);

export default YourClub;
