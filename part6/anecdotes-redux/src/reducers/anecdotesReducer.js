import anecdotesService from '../services/anecdotes';

const anecdotesReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      return action.payload;
    case 'ADD':
      return [...state, action.payload];
    case 'VOTE':
      const filtered = state.filter(a => a.id !== action.payload.id);
      return [...filtered, action.payload];
    default:
      return state;
  }
};

export const initAnecdotes = () => async dispatch => {
  const anecdotes = await anecdotesService.getAll();
  dispatch({
    type: 'INIT',
    payload: anecdotes,
  });
};

export const createAnecdote = data => async dispatch => {
  const newAnecdote = await anecdotesService.create(data.content);

  dispatch({
    type: 'ADD',
    payload: {
      ...newAnecdote,
    },
  });
};

export const vote = data => async dispatch => {
  const updatedAnecdote = await anecdotesService.update(data);
  dispatch({
    type: 'VOTE',
    payload: {
      ...updatedAnecdote,
    },
  });
};

export default anecdotesReducer;
