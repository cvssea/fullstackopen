import React, { useState } from 'react';
import Anecdote from './Anecdote';

const App = ({ data }) => {
  // Build state object
  const initialState = {
    anecdotes: data.map((a, i) => ({ id: i, text: a, votes: 0 })),
    current: 0,
  };
  const [state, setState] = useState(initialState);
  const { anecdotes, current } = state;

  // HELPERS
  const getAnecdoteInfo = () => {
    return {
      ...anecdotes.find((a) => a.id === current),
    };
  };
  const { text, votes } = getAnecdoteInfo();

  const getWinner = () => {
    let winner = anecdotes[current];
    anecdotes.forEach((a) => {
      if (a.votes > winner.votes) winner = { ...a };
    });
    return winner;
  };
  const winner = getWinner();

  // Click handlers
  const handleClick = () => {
    let random = Math.floor(Math.random() * anecdotes.length);
    setState({
      ...state,
      current: random,
    });
  };

  const handleVote = () => {
    const { votes } = getAnecdoteInfo();
    setState({
      ...state,
      anecdotes: [
        ...anecdotes.filter((a) => a.id !== current),
        {
          ...getAnecdoteInfo(),
          votes: votes + 1,
        },
      ],
    });
  };

  // Render
  return (
    <div>
      <Anecdote title="Anecdote of the day" text={text} votes={votes} />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <Anecdote
        title="Anecdote with most votes"
        text={winner.text}
        votes={winner.votes}
      />
    </div>
  );
};

export default App;
