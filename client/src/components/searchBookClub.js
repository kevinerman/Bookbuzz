import React from "react";

const SearchClubs = props => (
  <div>
    <h1>Search All Clubs</h1>
    <form>
      <div className="form-group">
        {/* <label for="searchBookClubs">Type to Search</label> */}
        <input
          type="text"
          name="searchBookClubs"
          className="form-control"
          id="searchBookClubs"
          // aria-describedby="emailHelp"
          placeholder="Type here to search"
          // onChange={this.handleSearchClubs.bind(this)}
        />
        <div className="searchClubsView">
          <div>
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
            and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default SearchClubs;
