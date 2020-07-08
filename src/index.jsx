import React from 'react';
import { render } from 'react-dom';
import '@babel/polyfill';

import { App } from './components/App';
import { init } from './init';

init( )
  .then( (currentUser) => render( <App currentUser={currentUser}/>, document.getElementById( `root` ) ) );
