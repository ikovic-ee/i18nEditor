import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Root from './components/root';

const app = (
  <Provider store={store}>
    <Root/>
  </Provider>
);

render(app, document.getElementById('app'));
