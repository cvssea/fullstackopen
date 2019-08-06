const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const genId = () => Math.floor(Math.random() * 10000);
const toObject = item => {
  return {
    id: genId(),
    content: item,
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(toObject);

const anecdotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'VOTE':
      const updated = state.map(a => {
        if (a.id === action.payload.id) {
          return { ...a, votes: a.votes + 1 };
        }
        return a;
      });
      return updated;
    default:
      return state;
  }
};

export const createAnecdote = payload => {
  return {
    type: 'ADD',
    payload: {
      ...payload,
      id: genId(),
      votes: 0,
    },
  };
};

export const vote = payload => {
  return {
    type: 'VOTE',
    payload,
  };
};

export default anecdotesReducer;
