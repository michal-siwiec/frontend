import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ApolloError } from '@apollo/client';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders';
import { generatePreloadedState } from 'tests/integration/helpers/preloadedState';
import { REGISTER_USER } from 'graphql/mutations/user';
import { ERROR_CODES } from 'data/errors';
import Register from 'pages/Register';

describe('Register page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('redirect to / path when user is logged', () => {
    renderWithProviders(
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/register" element={<Register />} />
      </Routes>,
      {
        preloadedState: generatePreloadedState({ userStatePresent: true }),
        initialEntries: ['/register']
      }
    );

    expect(screen.getByText('Home Page')).toBeInTheDocument();
    expect(screen.queryByText('Logowanie')).not.toBeInTheDocument();
    expect(screen.queryByText('Rejestracja')).not.toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Email')).not.toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Password')).not.toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Password')).not.toBeInTheDocument();
    expect(screen.queryByTestId('register-file-input')).not.toBeInTheDocument();
    expect(screen.queryByText('Załóż konto')).not.toBeInTheDocument();
    expect(screen.queryByText('Rejestrujemy użytkownika!')).not.toBeInTheDocument();
    expect(screen.queryByText('Twoje konto zostało pomyślnie założone!')).not.toBeInTheDocument();
    expect(screen.queryByText('Niestety nie udało się zarejestrować nowego konta.')).not.toBeInTheDocument();
  });

  it('renders component successfully when user is not logged', async () => {
    renderWithProviders(
      <Register />,
      { preloadedState: generatePreloadedState({ userStatePresent: true, userState: { loggedUserId: null, avatars: [] } }) }
    );

    const loginLink = screen.getByRole('link', { name: 'Logowanie' });
    const registerLink = screen.getByRole('link', { name: 'Rejestracja' });

    expect(loginLink).toHaveAttribute('href', '/login');
    expect(registerLink).toHaveAttribute('href', '/register');

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByTestId('register-file-input')).toBeInTheDocument();
    expect(screen.getByText('Załóż konto')).toBeInTheDocument();
    expect(screen.queryByText('Rejestrujemy użytkownika!')).not.toBeInTheDocument();
    expect(screen.queryByText('Twoje konto zostało pomyślnie założone!')).not.toBeInTheDocument();
    expect(screen.queryByText('Niestety nie udało się zarejestrować nowego konta.')).not.toBeInTheDocument();
  });

  it('properly fills input with values', async () => {
    renderWithProviders(
      <Register />,
      { preloadedState: generatePreloadedState({ userStatePresent: true, userState: { loggedUserId: null, avatars: [] } }) }
    );

    const emailField = screen.getByPlaceholderText('Email');
    const passwordField = screen.getByPlaceholderText('Password');
    const fileField: HTMLInputElement = screen.getByTestId('register-file-input');

    fireEvent.change(emailField, { target: { value: 'siwiec.michal724@gmail.com' } });
    fireEvent.change(passwordField, { target: { value: 'Some password' } });

    await waitFor(() => {
      fireEvent.change(fileField, { target: { files: [new File(['avatar content'], 'avatar.png', { type: 'image/png' })] } });
    });

    expect(emailField).toHaveValue('siwiec.michal724@gmail.com');
    expect(passwordField).toHaveValue('Some password');

    await waitFor(() => {
      expect(fileField.files).toHaveLength(1);
      expect(fileField.files![0].name).toBe('avatar.png');
      expect(fileField.files![0]).toBeInstanceOf(File);
    });
  });

  it('shows validation error messages', async () => {
    renderWithProviders(
      <Register />,
      { preloadedState: generatePreloadedState({ userStatePresent: true, userState: { loggedUserId: null, avatars: [] } }) }
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'siwiec.michal724gmail.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'ax34@@' } });

    await waitFor(() => {
      fireEvent.change(screen.getByTestId('register-file-input'), { target: { files: [new File(['%PDF-1.4\n%...'], 'invoice.pdf', { type: 'application/pdf' })] } });
    });

    await waitFor(() => {
      expect(screen.queryByText('Email ma niepoprawny format!')).not.toBeInTheDocument();
      expect(screen.queryByText('Hasło powinno mieć minimum 8 znaków, zawierać małą i dużą literę oraz cyfrę!')).not.toBeInTheDocument();
      expect(screen.queryByText('Dozwolone formaty to: png, svg, jpeg')).not.toBeInTheDocument();
    });

    fireEvent.mouseDown(screen.getByText('Załóż konto'));

    expect(screen.getByText('Email ma niepoprawny format!')).toBeInTheDocument();
    expect(screen.getByText('Hasło powinno mieć minimum 8 znaków, zawierać małą i dużą literę oraz cyfrę!')).toBeInTheDocument();
    expect(screen.getByText('Dozwolone formaty to: png, svg, jpeg')).toBeInTheDocument();
  });

  it('clears form after registration completed successfully', async () => {
    const mocks = [
      {
        request: {
          query: REGISTER_USER,
          variables: { input: { email: 'siwiec.michal724@gmail.com', password: 'qwertY12', avatars: [] } }
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
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/register" element={<Register />} />
      </Routes>,
      {
        preloadedState: generatePreloadedState({ userStatePresent: true, userState: { loggedUserId: null, avatars: [] } }),
        initialEntries: ['/register'],
        mocks
      }
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'siwiec.michal724@gmail.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'qwertY12' } });
    fireEvent.mouseDown(screen.getByText('Załóż konto'));

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Email')).toHaveValue('');
      expect(screen.getByPlaceholderText('Password')).toHaveValue('');
      expect((screen.getByTestId('register-file-input') as HTMLInputElement).files).toHaveLength(0);
    });
  });

  it('shows loading modal whiles registration', async () => {
    const mocks = [
      {
        request: {
          query: REGISTER_USER,
          variables: { input: { email: 'siwiec.michal724@gmail.com', password: 'qwertY12', avatars: [] } }
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
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/register" element={<Register />} />
      </Routes>,
      {
        preloadedState: generatePreloadedState({ userStatePresent: true, userState: { loggedUserId: null, avatars: [] } }),
        initialEntries: ['/register'],
        mocks
      }
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'siwiec.michal724@gmail.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'qwertY12' } });
    fireEvent.mouseDown(screen.getByText('Załóż konto'));

    await waitFor(() => {
      expect(screen.queryByText('Twoje konto zostało pomyślnie założone!')).not.toBeInTheDocument();
      expect(screen.queryByText('Niestety nie udało się zarejestrować nowego konta.')).not.toBeInTheDocument();
      expect(screen.getByText('Rejestrujemy użytkownika!')).toBeInTheDocument();
    });
  });

  it('shows error modal after registration process failed', async () => {
    const mocks = [
      {
        request: {
          query: REGISTER_USER,
          variables: { input: { email: 'siwiec.michal724@gmail.com', password: 'qwertY12', avatars: [] } }
        },
        error: new ApolloError({
          networkError: {
            name: 'ServerError',
            statusCode: 500,
            bodyText: 'Internal Server Error',
            message: 'Internal Server Error'
          }
        })
      }
    ];

    renderWithProviders(
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/register" element={<Register />} />
      </Routes>,
      {
        preloadedState: generatePreloadedState({ userStatePresent: true, userState: { loggedUserId: null, avatars: [] } }),
        initialEntries: ['/register'],
        mocks
      }
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'siwiec.michal724@gmail.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'qwertY12' } });
    fireEvent.mouseDown(screen.getByText('Załóż konto'));

    await waitFor(() => {
      expect(screen.queryByText('Twoje konto zostało pomyślnie założone!')).not.toBeInTheDocument();
      expect(screen.queryByText('Rejestrujemy użytkownika!')).not.toBeInTheDocument();
      expect(screen.getByText('Niestety nie udało się zarejestrować nowego konta.')).toBeInTheDocument();
    });
  });

  it('shows error modal when user email is already busy', async () => {
    const mocks = [
      {
        request: {
          query: REGISTER_USER,
          variables: { input: { email: 'siwiec.michal724@gmail.com', password: 'qwertY12', avatars: [] } }
        },
        error: new ApolloError({
          graphQLErrors: [
            {
              message: 'Email is already taken',
              extensions: {
                error_code: ERROR_CODES.EMAIL_ALREADY_TAKEN,
              }
            }
          ]
        })
      }
    ];

    renderWithProviders(
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/register" element={<Register />} />
      </Routes>,
      {
        preloadedState: generatePreloadedState({ userStatePresent: true, userState: { loggedUserId: null, avatars: [] } }),
        initialEntries: ['/register'],
        mocks
      }
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'siwiec.michal724@gmail.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'qwertY12' } });
    fireEvent.mouseDown(screen.getByText('Załóż konto'));

    await waitFor(() => {
      expect(screen.queryByText('Twoje konto zostało pomyślnie założone!')).not.toBeInTheDocument();
      expect(screen.queryByText('Rejestrujemy użytkownika!')).not.toBeInTheDocument();
      expect(screen.getByText('Adres email jest już zajęty!')).toBeInTheDocument();
    });
  });
});
