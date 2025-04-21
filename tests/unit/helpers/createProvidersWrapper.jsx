import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'redux_/rootReducer.js';
import { ApolloProvider } from '@apollo/client';
import Client from 'graphql/client.js';

const createProvidersWrapper = (preloadedState = {}) => {
  const store = configureStore({ reducer: rootReducer, preloadedState });
  const wrapper = ({ children }) => (
    <ApolloProvider client={Client}>
      <Provider store={store}>{children}</Provider>
    </ApolloProvider>
  );

  return { store, wrapper };
};

export default createProvidersWrapper;
