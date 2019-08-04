import deepFreeze from 'deep-freeze';
import anecdotesReducer from './';

describe('anecdotes reducer', () => {
  test('adding new anecdote succeeds', () => {
    const state = [];
    const anecdote = {
      id: 1,
      content: 'Adding works!',
      votes: 0,
    };
    deepFreeze(state);

    const action = {
      type: 'ADD',
      payload: anecdote,
    };
    const newState = anecdotesReducer(state, action);
    expect(newState).toEqual([anecdote]);
  });

  test('voting anecdotes returns correct state', () => {
    const state = [
      {
        id: 1,
        content: 'Testing voting',
        votes: 0,
      },
    ];
    deepFreeze(state);

    const action = {
      type: 'VOTE',
      payload: { id: 1 },
    };
    const newState = anecdotesReducer(state, action);
    expect(newState).toEqual([
      {
        id: 1,
        content: 'Testing voting',
        votes: 1,
      },
    ]);
  });
});
