import React from 'react';
import { render } from 'react-dom';
import { store } from './redux/store';
import { App } from './containers/App';
import './scss/styles.scss';
import { Provider } from 'react-redux';
import apiInstance from './API/unsplashAPI';
import { authFailure, authSuccess } from './redux/actions/authActions';

apiInstance.authentication()
  .then( userProfile => store.dispatch( authSuccess( userProfile ) ) )
  .then( () => render(
    <Provider store = {store}>
      <App/>
    </Provider>, document.getElementById( 'root' ) ) )
  .catch( error => store.dispatch( authFailure( error ) ) );


