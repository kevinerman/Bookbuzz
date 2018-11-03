import React from "react";

const SearchForm = props => (
  <form>
    
    <div className="form-group">
      {/* <label htmlFor="search" className="text-success">Search:</label> */}
      
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search for a Book"
        id="search"
      />
      <button
        // onClick={props.handleFormSubmit}
        className="btn btn-outline-warning btn-lg btn-block">
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
