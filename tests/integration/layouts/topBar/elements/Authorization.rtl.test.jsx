import { screen, fireEvent, waitFor } from '@testing-library/react';
import Authorization from 'layouts/topBar/elements/Authorization.jsx';
import { LOGOUT_USER } from 'graphql/mutations/user.js';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders.jsx';

describe('Authorization', () => {
  it('renders login/register page when user is not logged', () => {
    renderWithProviders(<Authorization />, { preloadedState: { user: { loggedUserId: null } } });

    expect(screen.getByText('Logowanie')).toBeInTheDocument();
    expect(screen.getByText('Rejestracja')).toBeInTheDocument();
    expect(screen.queryByText('Wyloguj')).not.toBeInTheDocument();
  });

  it('renders logout page when user is logged', () => {
    renderWithProviders(<Authorization />, { preloadedState: { user: { loggedUserId: '1e976dcb-cacc-4d1a-874a-ea97699ac706' } } });

    expect(screen.queryByText('Logowanie')).not.toBeInTheDocument();
    expect(screen.queryByText('Rejestracja')).not.toBeInTheDocument();
    expect(screen.getByText('Wyloguj')).toBeInTheDocument();
  });

  it("logout user when click 'wyloguj'", async () => {
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

    renderWithProviders(<Authorization />, { preloadedState: { user: { loggedUserId: '1e976dcb-cacc-4d1a-874a-ea97699ac706' } }, mocks });

    fireEvent.mouseDown(screen.getByText('Wyloguj'));

    await waitFor(() => {
      expect(screen.getByText('Logowanie')).toBeInTheDocument();
      expect(screen.getByText('Rejestracja')).toBeInTheDocument();
      expect(screen.queryByText('Wyloguj')).not.toBeInTheDocument();
    });
  });
});
