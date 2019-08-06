import React from 'react';
import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdotesReducer';
import './AnecdoteForm.css';

const AnecdoteForm = ({ createAnecdote }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    const message = `You added '${anecdote}'`;
    const payload = {
      content: anecdote,
      message,
    };
    createAnecdote(payload);
    e.target.anecdote.value = '';
  };

  return (
    <div className="AnecdoteForm">
      <h2>Create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="anecdote" placeholder="Make it funny!" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { createAnecdote }
)(AnecdoteForm);
