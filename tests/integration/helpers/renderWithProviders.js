import React from 'react';
import { render } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloProvider } from '@apollo/client';
import { store, persistor } from 'redux_/store.js';
import client from 'graphql/client.js';

// TODO: Uncomment BrowserRouter

const renderWithProviders = (ui, { ...renderOptions } = {}) => {
  return render(
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <BrowserRouter> */}
            {ui}
          {/* </BrowserRouter> */}
        </PersistGate>
      </ReduxProvider>
    </ApolloProvider>,
    renderOptions
  );
};

export default renderWithProviders;
