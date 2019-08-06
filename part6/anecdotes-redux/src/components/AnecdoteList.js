import React from 'react';
import { connect } from 'react-redux';
import Anecdote from './Anecdote';
import { vote } from '../reducers/anecdotesReducer';

const AnecdoteList = ({ anecdotes, vote }) => {
  const handleClick = anecdote => () => {
    const message = `You voted for '${anecdote.content}'`;
    const payload = {
      id: anecdote.id,
      message,
    };
    vote(payload);
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
  { vote }
)(AnecdoteList);
