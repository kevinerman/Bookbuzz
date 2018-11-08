import React from 'react';

const searchedClub = (props) => (
    <div  id={props.clubId}>
      <h3 >
        <strong>{props.clubName}</strong>
      </h3>
      <h5>Book: {props.bookName}</h5>
      
      <p> {props.meetingDate}</p>
      <button className="btn buttonClubCreate" onClick={(event) => props.action(event, props.clubId)}> ADD CLUB</button>
      {/* <button className="btn buttonDelete" onClick={(event) => props.action_club(event, props.clubId)}> GO TO CLUB</button> */}
      <a className="btn buttonDelete" onClick={(event) => props.action_club(event, props.clubId)} href={props.url}> GO TO CLUB</a>    
    </div>
  );
  
  export default searchedClub;