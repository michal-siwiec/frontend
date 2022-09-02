import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import client from 'graphql/client.js';
import store from 'redux_/store.js';
import { API_WS_ROOT } from 'utils/environment.js';
import { render } from '@testing-library/react';

const renderWithProviders = (ui, { initialState, ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <ActionCableProvider url={API_WS_ROOT}>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </ActionCableProvider>
      </ReduxProvider>
    </ApolloProvider>
  );

  return render(<Wrapper />, { ...renderOptions });
};

export default renderWithProviders;
