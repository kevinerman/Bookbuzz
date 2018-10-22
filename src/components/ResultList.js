import React from "react";

var thumbnailCheck = function(result) {
  if (!result.volumeInfo.imageLinks) {
    return ("https://www.waltercedric.com/media/plg_cedthumbnails/default-300x250.jpg")
  } else {
    return (result.volumeInfo.imageLinks.thumbnail)
  }
}

const ResultList = props => (
  <ul className="list-group">
    {props.results.map(result => (
      <li className="list-group-item" key={result.id}>
      <p>{result.volumeInfo.title}</p>
      <p>By: {result.volumeInfo.authors}</p>
        <img 
          alt="No Content"
          className="img-fluid"
          src={thumbnailCheck(result)}
        />
        <br></br>
        <button className={props.results.indexOf(result)}
        onClick = {() => props.saveButton(props.results.indexOf(result))}
        >Save</button>
      </li>
    ))}
  </ul>
);

export default ResultList;
