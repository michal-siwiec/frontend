/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import { ApolloProvider } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';
import client from 'graphql/client.js';
import { API_WS_ROOT } from 'utils/environment.js';
import App from 'views/App.jsx';
import store from 'redux_/store.js';

ReactDOM.render(
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <ActionCableProvider url={API_WS_ROOT}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ActionCableProvider>
    </ReduxProvider>
  </ApolloProvider>,
  document.querySelector('#wrapper')
);
