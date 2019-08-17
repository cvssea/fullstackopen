import React, { useState } from 'react';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';
import AnecdoteList from './components/AnecdoteList';
import CreateNew from './components/CreateNew';

import { initialAnecdotes } from './services/anecdotes';

const App = () => {
  const [anecdotes, setAnecdotes] = useState(initialAnecdotes);
  const [notification, setNotification] = useState(null);

  const addNew = anecdote => {
    const id = Math.floor(Math.random() * 10000);
    const newAnecdote = {
      id,
      ...anecdote,
    };
    setAnecdotes([newAnecdote, ...anecdotes]);
  };

  return (
    <div>
      <h1>Software Anecdotes</h1>
      <Menu />
      <AnecdoteList anecdotes={anecdotes} />
      <About />
      <CreateNew addNew={addNew} />
      <Footer />
    </div>
  );
};

export default App;
