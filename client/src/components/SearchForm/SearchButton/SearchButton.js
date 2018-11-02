import React from 'react';

const SearchButton = (props) => (
    <button
      onClick={props.clicked}
      className="btn buttonClubCreate">
      Search
    </button>
);

export default SearchButton;