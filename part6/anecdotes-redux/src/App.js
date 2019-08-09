import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initAnecdotes } from './reducers/anecdotesReducer';

import Filter from './components/Filter';
import Notification from './components/Notification';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

const App = ({ notification, initAnecdotes }) => {
  useEffect(() => {
    initAnecdotes();
  }, [initAnecdotes]);

  return (
    <div>
      <h1>Anecdotes</h1>
      <Filter />
      <AnecdoteForm />
      {notification && <Notification />}
      <AnecdoteList />
    </div>
  );
};

const mapStateToProps = ({ notification }) => ({ notification });

export default connect(
  mapStateToProps,
  { initAnecdotes }
)(App);
