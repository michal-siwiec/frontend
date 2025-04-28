import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders.jsx';
import Newsletter from 'layouts/Newsletter.jsx';
import { USER_PERSONAL_DETAILS, IS_USER_SAVED_TO_NEWSLETTER } from 'graphql/queries/user';

const renderComponent = ({ mocks, preloadedState }) => (
  renderWithProviders(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Newsletter />
    </MockedProvider>,
    { preloadedState }
  )
)

describe('Newsletter', () => {
  it('does not render component when user is logged and already saved to newsletter', async () => {
    const loggedUserId = '0c1069c7-8e77-4749-bc4b-e308c6679d1c';
    const preloadedState = { user: { loggedUserId } };

    const mocks = [
      {
        request: {
          query: USER_PERSONAL_DETAILS,
          variables: { userId: loggedUserId },
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              name: 'Michal',
              surname: 'Siwiec',
              email: 'siwiec.michal724@gmail.com',
              phoneNumber: '724131140',
              city: 'Gliwice',
              postalCode: '44-100',
              street: 'Zwycięstwa'
            },
          },
        },
      },
      {
        request: {
          query: IS_USER_SAVED_TO_NEWSLETTER,
          variables: { userId: loggedUserId },
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              savedToNewsletter: true,
              email: 'siwiec.michal724@gmail.com'
            },
          },
        },
      }
    ];

    renderComponent({ mocks, preloadedState });

    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Imię')).not.toBeInTheDocument();
      expect(screen.queryByPlaceholderText('Nazwisko')).not.toBeInTheDocument();
      expect(screen.queryByPlaceholderText('Adres email')).not.toBeInTheDocument();
      expect(screen.queryByText('Zapisz')).not.toBeInTheDocument();
    });
  });

  it('render component when user is not logged', async () => {
    const preloadedState = { user: { loggedUserId: null } };

    renderComponent({ mocks: [], preloadedState });

    await waitFor(() => {
      const nameField = screen.getByPlaceholderText('Imię');
      const surnameField = screen.getByPlaceholderText('Nazwisko');
      const emailField = screen.getByPlaceholderText('Adres email');
      const submitButton = screen.getByText('Zapisz');

      expect(nameField).toBeInTheDocument();
      expect(nameField).toHaveValue('');

      expect(surnameField).toBeInTheDocument();
      expect(surnameField).toHaveValue('');

      expect(emailField).toBeInTheDocument();
      expect(emailField).toHaveValue('');

      expect(submitButton).toBeInTheDocument();
    });
  });

  it('render component when user is not saved to newsletter', async () => {
    const loggedUserId = '0c1069c7-8e77-4749-bc4b-e308c6679d1c';
    const preloadedState = { user: { loggedUserId } };
    const mocks = [
      {
        request: {
          query: USER_PERSONAL_DETAILS,
          variables: { userId: loggedUserId },
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              name: 'Michal',
              surname: 'Siwiec',
              email: 'siwiec.michal724@gmail.com',
              phoneNumber: '724131140',
              city: 'Gliwice',
              postalCode: '44-100',
              street: 'Zwycięstwa'
            },
          },
        },
      },
      {
        request: {
          query: IS_USER_SAVED_TO_NEWSLETTER,
          variables: { userId: loggedUserId },
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              savedToNewsletter: false,
              email: 'siwiec.michal724@gmail.com'
            },
          },
        },
      }
    ];

    renderComponent({ mocks, preloadedState });

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Imię')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Nazwisko')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Adres email')).toBeInTheDocument();
      expect(screen.getByText('Zapisz')).toBeInTheDocument();
    });
  });
});
