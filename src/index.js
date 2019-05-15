import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from './reducers';
// needed dependancies
// applyMiddleware from redux (done)
// thunk from redux-thunk (done)
// logger from redux-logger (done)
// rootReducer from ./reducers (done)

const store = createStore(
  rootReducer,
  /* applyMiddleware goes here */
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
