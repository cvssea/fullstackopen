import React from 'react';
import Filter from './components/Filter';
import Notification from './components/Notification';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

const App = () => (
  <div>
    <h1>Anecdotes</h1>
    <Filter />
    <AnecdoteForm />
    <Notification />
    <AnecdoteList />
  </div>
);

export default App;
