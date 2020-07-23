import React from 'react';
import { render } from 'react-dom';
import { store } from './redux/store';
import '@babel/polyfill';

import { App } from './containers/App';
import './scss/styles.scss';
import { Provider } from 'react-redux';



render(
  <Provider store = {store}>
    <App/>
  </Provider>, document.getElementById( 'root' ) );
