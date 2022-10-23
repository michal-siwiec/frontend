/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store, persistor } from 'redux_/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import client from 'graphql/client.js';
import App from './App.jsx';

ReactDOM.render(
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </ApolloProvider>,
  document.querySelector('#wrapper')
);
