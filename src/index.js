/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import { API_WS_ROOT } from './constants/environment';
import App from './components/App.jsx';

ReactDOM.render(
  <ApolloProvider client={client}>
    <ActionCableProvider url={API_WS_ROOT}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ActionCableProvider>
  </ApolloProvider>,
  document.querySelector('#wrapper')
);
