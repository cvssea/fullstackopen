import React from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

const App = ({ store }) => (
  <div>
    <AnecdoteForm store={store} />
    <AnecdoteList store={store} />
  </div>
);

export default App;
