import { combineReducers } from 'redux';

import anecdotesReducer from './anecdotesReducer';
import notificationReducer from './notificationReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  anecdotes: anecdotesReducer,
  notification: notificationReducer,
  filter: filterReducer,
});
