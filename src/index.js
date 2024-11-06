// src/index.js
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}> {/* Wrapper Provider para Redux */}
    <App />
  </Provider>,
  document.getElementById('root')
);
