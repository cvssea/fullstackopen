import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = ({ setFilter }) => {
  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search Anecdotes"
      />
    </div>
  );
};

export default connect(
  null,
  { setFilter }
)(Filter);
