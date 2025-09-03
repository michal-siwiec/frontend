import React, { ReactElement } from 'react';
import { ApolloProvider } from '@apollo/client';
import { render } from '@testing-library/react';
import { MockedResponse } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, type PreloadedState } from '@reduxjs/toolkit';
import { MockedProvider } from '@apollo/client/testing';
import rootReducer from 'redux_/rootReducer';
import { RootState, AppStore } from 'types/store';
import Client from 'graphql/client';

type RenderWithProvidersType = {
  preloadedState?: PreloadedState<RootState>,
  initialEntries?: Array<string>,
  mocks?: ReadonlyArray<MockedResponse>,
  store?: AppStore,
};

const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = {},
    initialEntries = ['/'],
    mocks = [],
    store = configureStore({ reducer: rootReducer, preloadedState }),
  }: RenderWithProvidersType = {}
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
    </ApolloProvider>
  )
);

export default renderWithProviders;
