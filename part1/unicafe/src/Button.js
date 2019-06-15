import React from 'react';

export default ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);
