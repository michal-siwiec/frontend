import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import client from 'graphql/client.js';
import { store, persistor } from 'redux_/store.js';
import { render } from '@testing-library/react';

const renderWithProviders = (component, { ...renderOptions } = {}) => {
  const Wrapper = () => (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            {component}
          </BrowserRouter>
        </PersistGate>
      </ReduxProvider>
    </ApolloProvider>
  );

  return render(<Wrapper />, { ...renderOptions });
};

export default renderWithProviders;
