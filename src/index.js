import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

import AppContainer from './app/containers/AppContainer';


ReactDOM.render(
   <Provider store={store}>
      <AppContainer />
   </Provider>,
   document.getElementById('main')
);
