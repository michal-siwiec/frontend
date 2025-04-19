import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'redux_/rootReducer.js';
import { ApolloProvider } from '@apollo/client';
import Client from 'graphql/client.js';

const renderWithProviders = (
  ui,
  {
    preloadedState = {},
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  } = {}
) => {
  return render(
    <ApolloProvider client={Client}>
      <Provider store={store}>{ui}</Provider>
    </ApolloProvider>,
    renderOptions
  );
};

export default renderWithProviders;
