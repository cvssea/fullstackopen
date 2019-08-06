import React from 'react';
import Filter from './components/Filter';
import Notification from './components/Notification';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

const App = ({ store }) => (
  <div>
    <h1>Anecdotes</h1>
    <Filter store={store} />
    <AnecdoteForm store={store} />
    {store.getState().notification && <Notification store={store} />}
    <AnecdoteList store={store} />
  </div>
);

export default App;
