import React from "react";

var thumbnailCheck = function(result) {
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
        <img alt="No Content" className="img-fluid" src={thumbnailCheck(result)}/>
        <br/><br/>
        <button className={props.results.indexOf(result) + " btn-warning "}  onClick = {() => props.saveButton(props.results.indexOf(result))}>Save</button>
      </div>
    ))}
  




  
  </div>
  </div>




    
    





  
  
  
  
  

);

export default ResultList;
