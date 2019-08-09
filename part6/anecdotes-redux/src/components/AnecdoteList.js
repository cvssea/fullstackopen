import React from 'react';
import { connect } from 'react-redux';
import Anecdote from './Anecdote';
import { vote } from '../reducers/anecdotesReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = ({ anecdotes, vote, setNotification }) => {
  const handleClick = anecdote => () => {
    const message = `You voted for '${anecdote.content}'`;
    vote(anecdote);
    setNotification(message, 3);
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(a => (
          <Anecdote key={a.id} {...a} handleClick={handleClick(a)} />
        ))}
      </ul>
    </div>
  );
};

const anecdotesToShow = (anecdotes, filter) => {
  return anecdotes
    .filter(a => a.content.toLowerCase().includes(filter))
    .sort((a, b) => b.votes - a.votes);
};

const mapStateToProps = ({ anecdotes, filter }) => {
  return {
    anecdotes: anecdotesToShow(anecdotes, filter),
  };
};

export default connect(
  mapStateToProps,
  { vote, setNotification }
)(AnecdoteList);
