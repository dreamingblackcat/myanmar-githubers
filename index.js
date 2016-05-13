import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './stores/index.js';
import App from './containers/App';

var app = document.createElement('div');
document.body.appendChild(app);

const store = createStore();


render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);