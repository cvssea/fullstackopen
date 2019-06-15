import React from 'react';

const Anecdote = ({ title, text, votes }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </div>
  );
};

export default Anecdote;
