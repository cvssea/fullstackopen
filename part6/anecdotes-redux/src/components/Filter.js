import React from 'react';
import store from '../store';
import { setFilter } from '../reducers/filterReducer';

const Filter = () => {
  const handleChange = e => {
    const { value } = e.target;
    store.dispatch(setFilter(value));
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

export default Filter;
