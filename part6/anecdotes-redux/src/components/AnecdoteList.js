import React from 'react';
import Anecdote from './Anecdote';
import { vote } from '../reducers';

const AnecdoteList = ({ store }) => {
  const anecdotes = store
    .getState()
    .sort((a, b) => b.votes - a.votes)
    .map(a => (
      <Anecdote
        key={a.id}
        {...a}
        handleClick={() => store.dispatch(vote(a.id))}
      />
    ));

  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>{anecdotes}</ul>
    </div>
  );
};

export default AnecdoteList;
