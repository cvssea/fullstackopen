import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { anecdotes } from './anecdotes';

ReactDOM.render(<App data={anecdotes} />, document.getElementById('root'));
