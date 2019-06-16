import React from 'react';

const Filter = ({ onChange }) => (
  <div>
    <h3>Filter by name</h3>
    <input onChange={onChange} />
  </div>
);

export default Filter;
