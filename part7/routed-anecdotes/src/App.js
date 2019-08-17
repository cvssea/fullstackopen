import React, { useState } from 'react';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';
import AnecdoteList from './components/AnecdoteList';
import CreateNew from './components/CreateNew';
import Anecdote from './components/Anecdote';
import Notification from './components/Notification';

import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    setNotification(`A new anecdote '${anecdote.content}' created`);
    setTimeout(() => setNotification(null), 10000);
  };

  const anecdoteById = id => {
    return anecdotes.find(a => a.id === Number(id));
  };

  return (
    <div>
      <h1>Software Anecdotes</h1>
      <Router>
        <Menu />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              {notification && <Notification message={notification} />}
              <AnecdoteList anecdotes={anecdotes} />
            </div>
          )}
        />
        <Route
          exact
          path="/anecdotes/:id"
          render={({ match }) => (
            <Anecdote anecdote={anecdoteById(match.params.id)} />
          )}
        />
        <Route path="/about" render={() => <About />} />
        <Route path="/create" render={() => <CreateNew addNew={addNew} />} />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
