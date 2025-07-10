import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MockedProvider } from '@apollo/client/testing';
import rootReducer from 'redux_/rootReducer.js';
import { ApolloProvider } from '@apollo/client';
import Client from 'graphql/client.js';

const renderWithProviders = (
  ui,
  {
    preloadedState = {},
    initialEntries = ['/'],
    mocks = [],
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  } = {}
) => (
  render(
    <ApolloProvider client={Client}>
      <Provider store={store}>
        <MockedProvider mocks={mocks} addTypename={false}>
          {/* TODO: Fix this in React 18 */}
          <MemoryRouter initialEntries={initialEntries} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            {ui}
          </MemoryRouter>
        </MockedProvider>
      </Provider>
    </ApolloProvider>,
    renderOptions
  )
);

export default renderWithProviders;
