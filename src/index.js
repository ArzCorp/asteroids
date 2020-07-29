import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/Global.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk'

import reducers from './reducers';

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
