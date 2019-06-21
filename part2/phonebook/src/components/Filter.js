import React from 'react';

const Filter = ({ onChange, value }) => (
  <div>
    <h3>Filter by name</h3>
    <input onChange={onChange} value={value} />
  </div>
);

export default Filter;
