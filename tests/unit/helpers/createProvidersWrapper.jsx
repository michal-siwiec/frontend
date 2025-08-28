import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'redux_/rootReducer.ts';
import { ApolloProvider } from '@apollo/client';
import Client from 'graphql/client.ts';

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
