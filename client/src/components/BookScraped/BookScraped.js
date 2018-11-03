import React from 'react';
import Button from './Button/Button';

const styles = {
  button: {
    marginRight: '500px'
  },
  link: {
    textDecoration: 'none',
    
  }
};

const scraped = (props) => (
  <div  id={props.bookId}>
    <h3 >
      <strong>{props.title}</strong>
    </h3>
    <h5>Author: {props.author}</h5>
    <img src={props.URL} alt={"no pic available"}/>
    <p> {props.snippet}</p>
    <button className="btn buttonClubCreate" style={styles.button}><a  href={props.preview} target="_blank" rel="noopener noreferrer">Read/Buy</a></button>
    <Button title={props.saveTitle} clicked={(event) => props.action(event, props.bookId)} />
  </div>
);

export default scraped;