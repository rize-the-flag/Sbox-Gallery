import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import '@babel/polyfill';

import { App } from './components/App';
import './scss/styles.scss';
import { withAuth } from './HOCs/withAuth';


const WrappedApp = withAuth(App);

render(<WrappedApp />, document.getElementById('root'));
