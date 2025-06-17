import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import Authorization from 'layouts/topBar/elements/Authorization.jsx';
import { LOGOUT_USER } from 'graphql/mutations/user.js';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders.jsx';

describe('Authorization', () => {
  it('renders login/register page when user is not logged', () => {
    renderWithProviders(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Authorization />
      </MemoryRouter>,
      { preloadedState: { user: { loggedUserId: null } } }
    );

    expect(screen.getByText('Logowanie')).toBeInTheDocument();
    expect(screen.getByText('Rejestracja')).toBeInTheDocument();
    expect(screen.queryByText('Wyloguj')).not.toBeInTheDocument();
  });

  it('renders logout page when user is logged', () => {
    renderWithProviders(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Authorization />
      </MemoryRouter>,
      { preloadedState: { user: { loggedUserId: '1e976dcb-cacc-4d1a-874a-ea97699ac706' } } }
    );

    expect(screen.queryByText('Logowanie')).not.toBeInTheDocument();
    expect(screen.queryByText('Rejestracja')).not.toBeInTheDocument();
    expect(screen.getByText('Wyloguj')).toBeInTheDocument();
  });

  it("logout user when click 'wyloguj'", () => {
    const mocks = [
      {
        request: {
          query: LOGOUT_USER,
          variables: { input: { id: '1e976dcb-cacc-4d1a-874a-ea97699ac706' } }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: '1e976dcb-cacc-4d1a-874a-ea97699ac706'
            }
          }
        }
      }
    ];

    renderWithProviders(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Authorization />
        </MockedProvider>
      </MemoryRouter>,
      { preloadedState: { user: { loggedUserId: '1e976dcb-cacc-4d1a-874a-ea97699ac706' } } }
    );

    fireEvent.mouseDown(screen.getByText('Wyloguj'));

    waitFor(() => {
      expect(screen.getByText('Logowanie')).toBeInTheDocument();
      expect(screen.getByText('Rejestracja')).toBeInTheDocument();
      expect(screen.queryByText('Wyloguj')).not.toBeInTheDocument();
    });
  });
});
