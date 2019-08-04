import React from 'react';
import './Anecdote.css';

const Anecdote = ({ content, votes, handleClick }) => (
  <li className="Anecdote">
    <p>{content}</p>
    <span>Votes: {votes}</span>
    <button onClick={handleClick}>Vote</button>
  </li>
);

export default Anecdote;
