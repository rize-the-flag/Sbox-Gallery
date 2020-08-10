import React from 'react';
import { render } from 'react-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import apiInstance from './API/unsplashAPI';
import { authFailure, authSuccess } from './redux/actions/authActions';
import Gallery from './containers/Gallery';
import './scss/styles.scss';
import { BrowserRouter } from 'react-router-dom';

apiInstance.authentication()
  .then( userProfile => {
    store.dispatch( authSuccess( userProfile ) );
    render(
      <Provider store = {store}>
        <BrowserRouter>
          <Gallery/>
        </BrowserRouter>
      </Provider>, document.getElementById( 'root' ) );
  } )
  .catch( error => {
    store.dispatch( authFailure( error ) );
    alert( error );
  } );
