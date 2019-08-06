import React from 'react';
import Anecdote from './Anecdote';
import { vote } from '../reducers/anecdotesReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = ({ store }) => {
  const handleClick = anecdote => {
    store.dispatch(vote(anecdote.id));
    const message = `You voted for ${anecdote.content}`;
    store.dispatch(setNotification(message));
  };

  const anecdotesToShow = () => {
    const { anecdotes, filter } = store.getState();
    return anecdotes
      .filter(a => a.content.toLowerCase().includes(filter))
      .sort((a, b) => b.votes - a.votes)
      .map(a => (
        <Anecdote key={a.id} {...a} handleClick={() => handleClick(a)} />
      ));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>{anecdotesToShow()}</ul>
    </div>
  );
};

export default AnecdoteList;
