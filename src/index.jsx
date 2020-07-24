import React from 'react';
import { render } from 'react-dom';
import { store } from './redux/store';

import { App } from './containers/App';
import './scss/styles.scss';
import { Provider } from 'react-redux';
import  apiInstance  from './API/unsplashAPI';
import { getLocalBearerToken } from './API/localStorageAPI';


async function authentication() {
  const queryParams = location.search.match( /\?code=(?<code>.+)/ );

  if (!apiInstance.isAuthenticated()) {
    if (!queryParams) {
      location.assign( apiInstance.getAuthenticationUrl() );
      return;
    }
    await apiInstance.doAuth( queryParams['groups']['code'] );
  }
  return await apiInstance.getCurrentUserProfile( getLocalBearerToken() );
}

authentication()
  .then(userProfile => render(
    <Provider store = {store}>
      <App userProfile = {userProfile}/>
    </Provider>, document.getElementById( 'root' ) ) );


