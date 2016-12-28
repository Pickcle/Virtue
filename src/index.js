import React from 'react';
import ReactDOM from 'react-dom';
import Root from './js/RootRoute.js';
import Provider from 'react-redux';

import './css/style.scss';

ReactDOM.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('app')
);
