import React from "react";
import Button from "./Button/Button";

const styles = {
  button: {
    // marginRight: "500px",


  },
  link: {
    textDecoration: "none"
  }
};

const scraped = props => (
  
  <div className="row" id={props.bookId}>
    <div className="col s6 m6">
      <strong>{props.title}</strong> <br />
      <strong> Author: </strong>
      {props.author} <br />
      
      <button className="btn buttonClubCreate" style={styles.button}>
        <a
          href={props.preview}
          style={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read/Buy
        </a>
      </button>
      <Button
        title={props.saveTitle}
        clicked={event => props.action(event, props.bookId)}
      />
    </div>

    <div className="col s5 m5">
    <img src={props.URL} alt={"no pic available"} />
    </div>
  </div>
);

export default scraped;
