import React from 'react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { ApolloError } from '@apollo/client';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders.jsx';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { LOGIN_USER } from 'graphql/mutations/user.js';
import { ERROR_CODES } from 'data/errors.js';
import Login from 'pages/Login.jsx';

describe('Login', () => {
  it('redirect to / path when user is logged', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/login']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>,
      { preloadedState: { user: { loggedUserId: 'da97aa73-f0e4-4a17-9157-9f17454c73f3' } } }
    );

    expect(screen.queryByText('Rejestracja')).not.toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Adres email')).not.toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Hasło')).not.toBeInTheDocument();
    expect(screen.queryByText('Zaloguj się')).not.toBeInTheDocument();
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  it('renders component successfully', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/login']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>,
      { preloadedState: { user: { loggedUserId: null } } }
    );

    const loginLink = screen.getByRole('link', { name: 'Logowanie' });
    const registerLink = screen.getByRole('link', { name: 'Rejestracja' });

    expect(loginLink).toHaveAttribute('href', '/login');
    expect(registerLink).toHaveAttribute('href', '/register');
    expect(screen.getByPlaceholderText('Adres email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Hasło')).toBeInTheDocument();
    expect(screen.getByText('Zaloguj się')).toBeInTheDocument();
    expect(screen.queryByText('Trwa logowanie użytkownika!')).not.toBeInTheDocument();
    expect(screen.queryByText('Wystąpił niespodziewany problem!')).not.toBeInTheDocument();
  });

  it('fills inputs with values', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/login']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>,
      { preloadedState: { user: { loggedUserId: null } } }
    );

    const emailInput = screen.getByPlaceholderText('Adres email');
    const passwordInput = screen.getByPlaceholderText('Hasło');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'securePassword123' } });

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('securePassword123');
  });

  it('shows validation errors', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/login']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>,
      { preloadedState: { user: { loggedUserId: null } } }
    );

    expect(screen.queryByText('Email ma niepoprawny format!')).not.toBeInTheDocument();
    expect(screen.queryByText('Hasło powinno mieć minimum 8 znaków, zawierać małą i dużą literę oraz cyfrę!')).not.toBeInTheDocument();

    fireEvent.mouseDown(screen.getByText('Zaloguj się'));

    expect(screen.getByText('Email ma niepoprawny format!')).toBeInTheDocument();
    expect(screen.getByText('Hasło powinno mieć minimum 8 znaków, zawierać małą i dużą literę oraz cyfrę!')).toBeInTheDocument();
  });

  it('logins user successfully', async () => {
    const mocks = [
      {
        request: {
          query: LOGIN_USER,
          variables: { input: { email: 'test@example.com', password: 'securePassword123' } }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: 'da97aa73-f0e4-4a17-9157-9f17454c73f3',
              avatars: []
            }
          }
        }
      }
    ];

    renderWithProviders(
      <MemoryRouter initialEntries={['/login']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </MockedProvider>
      </MemoryRouter>,
      { preloadedState: { user: { loggedUserId: null } } }
    );

    fireEvent.change(screen.getByPlaceholderText('Adres email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Hasło'), { target: { value: 'securePassword123' } });
    fireEvent.mouseDown(screen.getByText('Zaloguj się'));

    await waitFor(() => {
      expect(screen.queryByText('Rejestracja')).not.toBeInTheDocument();
      expect(screen.queryByPlaceholderText('Adres email')).not.toBeInTheDocument();
      expect(screen.queryByPlaceholderText('Hasło')).not.toBeInTheDocument();
      expect(screen.queryByText('Zaloguj się')).not.toBeInTheDocument();
      expect(screen.getByText('Home Page')).toBeInTheDocument();
    });
  });

  it('shows loading modal while login user', async () => {
    const mocks = [
      {
        request: {
          query: LOGIN_USER,
          variables: { input: { email: 'test@example.com', password: 'securePassword123' } }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: 'da97aa73-f0e4-4a17-9157-9f17454c73f3',
              avatars: []
            }
          }
        },
        delay: 1000
      }
    ];

    renderWithProviders(
      <MemoryRouter initialEntries={['/login']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </MockedProvider>
      </MemoryRouter>,
      { preloadedState: { user: { loggedUserId: null } } }
    );

    fireEvent.change(screen.getByPlaceholderText('Adres email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Hasło'), { target: { value: 'securePassword123' } });
    fireEvent.mouseDown(screen.getByText('Zaloguj się'));

    await waitFor(() => {
      expect(screen.getByText('Trwa logowanie użytkownika!')).toBeInTheDocument();
    });
  });

  it('shows error modal when unexpected error occurs', async () => {
    const mocks = [
      {
        request: {
          query: LOGIN_USER,
          variables: { input: { email: 'test@example.com', password: 'securePassword123' } }
        },
        error: new ApolloError({
          networkError: {
            statusCode: 500,
            name: 'ServerError',
            message: 'Internal Server Error'
          }
        })
      }
    ];

    renderWithProviders(
      <MemoryRouter initialEntries={['/login']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </MockedProvider>
      </MemoryRouter>,
      { preloadedState: { user: { loggedUserId: null } } }
    );

    fireEvent.change(screen.getByPlaceholderText('Adres email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Hasło'), { target: { value: 'securePassword123' } });
    fireEvent.mouseDown(screen.getByText('Zaloguj się'));

    await waitFor(() => {
      expect(screen.getByText('Niestety nie udało się zalogować!')).toBeInTheDocument();
    });
  });

  it('shows error modal when user does not exist', async () => {
    const mocks = [
      {
        request: {
          query: LOGIN_USER,
          variables: { input: { email: 'test@example.com', password: 'securePassword123' } }
        },
        error: new ApolloError({
          graphQLErrors: [
            {
              extensions: {
                error_code: ERROR_CODES.USER_NOT_FOUND
              }
            }
          ]
        })
      }
    ];

    renderWithProviders(
      <MemoryRouter initialEntries={['/login']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </MockedProvider>
      </MemoryRouter>,
      { preloadedState: { user: { loggedUserId: null } } }
    );

    fireEvent.change(screen.getByPlaceholderText('Adres email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Hasło'), { target: { value: 'securePassword123' } });
    fireEvent.mouseDown(screen.getByText('Zaloguj się'));

    await waitFor(() => {
      expect(screen.getByText('Użytkownik o takim adresie email nie istnieje!')).toBeInTheDocument();
    });
  });

  it('close modal after login failed', async () => {
    const mocks = [
      {
        request: {
          query: LOGIN_USER,
          variables: { input: { email: 'test@example.com', password: 'securePassword123' } }
        },
        error: new ApolloError({
          graphQLErrors: [
            {
              extensions: {
                error_code: ERROR_CODES.USER_NOT_FOUND
              }
            }
          ]
        })
      }
    ];

    renderWithProviders(
      <MemoryRouter initialEntries={['/login']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </MockedProvider>
      </MemoryRouter>,
      { preloadedState: { user: { loggedUserId: null } } }
    );

    fireEvent.change(screen.getByPlaceholderText('Adres email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Hasło'), { target: { value: 'securePassword123' } });
    fireEvent.mouseDown(screen.getByText('Zaloguj się'));

    await waitFor(() => {
      expect(screen.getByText('Użytkownik o takim adresie email nie istnieje!')).toBeInTheDocument();
    });

    const modalBackdrop = screen.getByRole('presentation');
    fireEvent.keyDown(modalBackdrop, { key: 'Escape', code: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByText('Użytkownik o takim adresie email nie istnieje!')).not.toBeInTheDocument();
    });
  });
});
