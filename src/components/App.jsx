import React from 'react';
import Gallery from '../containers/Gallery';
import { Loader } from './Loader';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export const App = ( {userProfile} ) => {
  return (
    <Provider store = {store}>
      {
        userProfile['id']
          ? <Gallery/>
          : <Loader/>
      }
    </Provider>
  );
};
