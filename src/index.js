/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import { ApolloProvider } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store, persistor } from 'redux_/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import client from 'graphql/client.js';
import { API_WS_ROOT } from 'utils/environment.js';
import App from './App.jsx';

ReactDOM.render(
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ActionCableProvider url={API_WS_ROOT}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ActionCableProvider>
      </PersistGate>
    </ReduxProvider>
  </ApolloProvider>,
  document.querySelector('#wrapper')
);
