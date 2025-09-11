import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { generatePreloadedState } from 'tests/integration/helpers/preloadedState';
import Authorization from 'layouts/topBar/elements/Authorization';
import { LOGOUT_USER } from 'graphql/mutations/user';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders';

describe('Authorization', () => {
  it('renders login/register page when user is not logged', () => {
    renderWithProviders(<Authorization />, { preloadedState: generatePreloadedState() });

    expect(screen.getByText('Logowanie')).toBeInTheDocument();
    expect(screen.getByText('Rejestracja')).toBeInTheDocument();
    expect(screen.queryByText('Wyloguj')).not.toBeInTheDocument();
  });

  it('renders logout page when user is logged', () => {
    renderWithProviders(<Authorization />, { preloadedState: generatePreloadedState({ userStatePresent: true }) });

    expect(screen.queryByText('Logowanie')).not.toBeInTheDocument();
    expect(screen.queryByText('Rejestracja')).not.toBeInTheDocument();
    expect(screen.getByText('Wyloguj')).toBeInTheDocument();
  });

  it("logout user when click 'wyloguj'", async () => {
    const mocks = [
      {
        request: {
          query: LOGOUT_USER,
          variables: { input: { id: '0c1069c7-8e77-4749-bc4b-e308c6679d1c' } }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: '0c1069c7-8e77-4749-bc4b-e308c6679d1c'
            }
          }
        }
      }
    ];

    renderWithProviders(<Authorization />, { preloadedState: generatePreloadedState({ userStatePresent: true }), mocks });

    fireEvent.mouseDown(screen.getByText('Wyloguj'));

    await waitFor(() => {
      expect(screen.getByText('Logowanie')).toBeInTheDocument();
      expect(screen.getByText('Rejestracja')).toBeInTheDocument();
      expect(screen.queryByText('Wyloguj')).not.toBeInTheDocument();
    });
  });
});
