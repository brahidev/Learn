import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Components/styles/icons.css'
import App from './Components/App';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import Reducers from './reducers'

const store = createStore(
  Reducers, // All reducers
  {}, // Initial state
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
