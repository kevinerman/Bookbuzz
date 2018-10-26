import React from "react";
import './styles.css';

const AddClub = props => (
  <div>
    <form>
      {/* <h1>Add Book Club</h1> */}
      <div className="form-group">
        <label for="bookclubname">Book Club Name</label>
        <input
          type="text"
          className="form-control font-style"
          name="bookclubname"
          id="bookclubname"
          placeholder="Jane Austen Book Club"
        />
      </div>
      <div className="form-group">
        <label for="bookclubbook">Book Name</label>
        <input
          type="text"
          className="form-control font-style"
          name="bookclubbook"
          id="bookclubbook"
          placeholder="Jane Austen Secrets"
        />
      </div>
      <div className="form-group font-style">
        <label for="bookclubauthor">Author Name</label>
        <input
          type="text"
          className="form-control font-style"
          name="bookclubauthor"
          id="bookclubauthor"
          placeholder="Jane Austen"
        />
      </div>
      <div className="form-group">
        <label for="exampleFormControlTextarea1">Important Notes</label>
        <textarea
          className="form-control font-style"
          id="exampleFormControlTextarea1"
          rows="2"
        />
      </div>
      <div className="form-group">
        <label for="start-time">Start Date/time:</label>
        <input
          type="datetime-local"
          id="start-time"
          className="form-control font-style"
          name="party-time"
          value="2018-06-12T19:30"
          min="2018-06-07T00:00"
          max="2020-06-14T00:00"
        />
      </div>
      <div className="form-group">
      <label for="start-time">End Date/time:</label>
        <input
          type="datetime-local"
          id="end-time"
          className="form-control"
          name="end-time"
          value="2018-06-12T19:30"
          min="2018-11-07T00:00"
          max="2020-06-14T00:00"
        />
      </div>

      <button
        // onClick={props.handleFormSubmit}
        className="btn btn-outline-warning btn-lg btn-block">
        Add Club
      </button>


    </form>

    
    <div>
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </div>
    
  </div>
);

export default AddClub;
