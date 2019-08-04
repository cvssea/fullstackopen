import React from 'react';
import { createAnecdote } from '../reducers';
import './AnecdoteForm.css';

const AnecdoteForm = ({ store }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    store.dispatch(createAnecdote(anecdote));
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

export default AnecdoteForm;
