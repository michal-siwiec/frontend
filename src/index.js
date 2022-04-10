import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from "@apollo/client";
import { ActionCableProvider } from 'react-actioncable-provider';
import Client from './graphql/client.js';
import { API_WS_ROOT } from './constants/API';

ReactDOM.render(
  <ApolloProvider client={Client}>
    <ActionCableProvider url={API_WS_ROOT}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ActionCableProvider>
  </ApolloProvider>,
  document.querySelector('#wrapper')
);
