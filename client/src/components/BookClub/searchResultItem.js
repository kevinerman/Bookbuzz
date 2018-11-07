import React from 'react';

// this.addClub = this.addClub.bind(this);

// addClub = event => {

// event.preventDefault();
// }

const searchedClub = (props) => (
    <div  id={props.clubId}>
      <h3 >
        <strong>{props.clubName}</strong>
      </h3>
      <h5>Book: {props.bookName}</h5>
      {/* <img src={props.URL} alt={"no pic available"}/> */}
      <p> {props.meetingDate}</p>
      <button className="btn buttonClubCreate" onClick="this.addClub()"> ADD CLUB</button>
     
    </div>
  );
  
  export default searchedClub;