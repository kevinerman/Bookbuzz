import React from 'react';

const button = (props) => (
  <button className="btn buttonDelete" onClick={props.clicked}>{props.title}</button>
);

export default button;