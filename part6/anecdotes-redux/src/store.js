import { createStore, combineReducers } from 'redux';
import anecdotesReducer from './reducers/anecdotesReducer';
import notificationReducer from './reducers/notificationReducer';
import filterReducer from './reducers/filterReducer';

const reducer = combineReducers({
  anecdotes: anecdotesReducer,
  notification: notificationReducer,
  filter: filterReducer,
});

const store = createStore(reducer);

export default store;
