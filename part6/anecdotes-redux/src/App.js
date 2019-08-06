import React from 'react';
import { connect } from 'react-redux';
import Filter from './components/Filter';
import Notification from './components/Notification';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

const App = ({ notification }) => (
  <div>
    <h1>Anecdotes</h1>
    <Filter />
    <AnecdoteForm />
    {notification && <Notification />}
    <AnecdoteList />
  </div>
);

const mapStateToProps = ({ notification }) => ({ notification });

export default connect(mapStateToProps)(App);
