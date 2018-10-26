import React from "react";

var thumbnailCheck = function (result) {
  if (!result.volumeInfo.imageLinks) {
    return ("https://www.waltercedric.com/media/plg_cedthumbnails/default-300x250.jpg")
  } else {
    return (result.volumeInfo.imageLinks.thumbnail)
  }
}

const ResultList = props => (

  <div class="container">
    <div class="row">


      {props.results.map(result => (
        <div className="col-6" key={result.id}>
          <h5>{result.volumeInfo.title}</h5>
          By:{result.volumeInfo.authors}
          <img alt="No Content" className="img-fluid" src={thumbnailCheck(result)} />
          <br /><br />
          <form action="/saveBook" method="post">
            <input type="text" name="title" value={props.saveButton(props.results.indexOf(result)).newTitle} className={props.results.indexOf(result) + " btn-warning "}></input>
            <input type="text" name="author" value={props.saveButton(props.results.indexOf(result)).newAuthor[0]} className={props.results.indexOf(result) + " btn-warning "}></input>
            <input type="submit"></input>
          </form>
        </div>
      ))}
    </div>
  </div>

















);

export default ResultList;
