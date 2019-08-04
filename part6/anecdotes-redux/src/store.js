import { createStore } from 'redux';
import anecdotesReducer from './reducers';

const store = createStore(anecdotesReducer);

export default store;
