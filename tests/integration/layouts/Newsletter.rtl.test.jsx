import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/client/testing';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders.jsx';
import Newsletter from 'layouts/Newsletter.jsx';
import { USER_PERSONAL_DETAILS, IS_USER_SAVED_TO_NEWSLETTER } from 'graphql/queries/user.ts';
import { SUBSCRIBE_TO_NEWSLETTER } from 'graphql/mutations/user.ts';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors.ts';

const renderComponent = ({ mocks, preloadedState }) => (
  renderWithProviders(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Newsletter />
    </MockedProvider>,
    { preloadedState }
  )
);

describe('Newsletter', () => {
  let loggedUserId;
  let preloadedState;

  beforeEach(() => {
    loggedUserId = '0c1069c7-8e77-4749-bc4b-e308c6679d1c';
    preloadedState = { user: { loggedUserId } };
  });

  it('does not render component when user is logged and already saved to newsletter', async () => {
    const mocks = [
      {
        request: {
          query: USER_PERSONAL_DETAILS,
          variables: { userId: loggedUserId }
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
            }
          }
        }
      },
      {
        request: {
          query: IS_USER_SAVED_TO_NEWSLETTER,
          variables: { userId: loggedUserId }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              savedToNewsletter: true,
              email: 'siwiec.michal724@gmail.com'
            }
          }
        }
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
    preloadedState = { user: { loggedUserId: null } };

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
    const mocks = [
      {
        request: {
          query: USER_PERSONAL_DETAILS,
          variables: { userId: loggedUserId }
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
            }
          }
        }
      },
      {
        request: {
          query: IS_USER_SAVED_TO_NEWSLETTER,
          variables: { userId: loggedUserId }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              savedToNewsletter: false,
              email: 'siwiec.michal724@gmail.com'
            }
          }
        }
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

  it('fills form with user data when user is logged and data are configured for them', async () => {
    const mocks = [
      {
        request: {
          query: USER_PERSONAL_DETAILS,
          variables: { userId: loggedUserId }
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
            }
          }
        }
      },
      {
        request: {
          query: IS_USER_SAVED_TO_NEWSLETTER,
          variables: { userId: loggedUserId }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              savedToNewsletter: false,
              email: 'siwiec.michal724@gmail.com'
            }
          }
        }
      }
    ];

    renderComponent({ mocks, preloadedState });

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Imię')).toHaveValue('Michal');
      expect(screen.getByPlaceholderText('Nazwisko')).toHaveValue('Siwiec');
      expect(screen.getByPlaceholderText('Adres email')).toHaveValue('siwiec.michal724@gmail.com');
    });
  });

  it('fills inputs with entered values', async () => {
    const mocks = [
      {
        request: {
          query: USER_PERSONAL_DETAILS,
          variables: { userId: loggedUserId }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              name: null,
              surname: null,
              email: null,
              phoneNumber: null,
              city: null,
              postalCode: null,
              street: null
            }
          }
        }
      },
      {
        request: {
          query: IS_USER_SAVED_TO_NEWSLETTER,
          variables: { userId: loggedUserId }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              savedToNewsletter: false,
              email: null
            }
          }
        }
      }
    ];

    renderComponent({ mocks, preloadedState });

    await waitFor(async () => {
      const user = userEvent.setup();
      const nameField = screen.getByPlaceholderText('Imię');
      const surnameField = screen.getByPlaceholderText('Nazwisko');
      const emailField = screen.getByPlaceholderText('Adres email');

      await user.type(nameField, 'Janusz');
      await user.type(surnameField, 'Kolwaski');
      await user.type(emailField, 'janusz.kowalski@gmail.com');

      expect(nameField).toHaveValue('Janusz');
      expect(surnameField).toHaveValue('Kolwaski');
      expect(emailField).toHaveValue('janusz.kowalski@gmail.com');
    });
  });

  it('validates entered values to fields', async () => {
    const mocks = [
      {
        request: {
          query: USER_PERSONAL_DETAILS,
          variables: { userId: loggedUserId }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              name: null,
              surname: null,
              email: null,
              phoneNumber: null,
              city: null,
              postalCode: null,
              street: null
            }
          }
        }
      },
      {
        request: {
          query: IS_USER_SAVED_TO_NEWSLETTER,
          variables: { userId: loggedUserId }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              savedToNewsletter: false,
              email: null
            }
          }
        }
      },
      {
        request: {
          query: SUBSCRIBE_TO_NEWSLETTER,
          variables: {
            input: {
              email: 'janusz.kowalski@gmail.com',
              name: 'Janusz',
              surname: 'Kowalski'
            }
          }
        },
        result: {
          data: {
            subscribeUserToNewsletter: {
              id: loggedUserId,
              __typename: 'UserObject'
            }
          }
        }
      },
      {
        request: {
          query: IS_USER_SAVED_TO_NEWSLETTER,
          variables: { userId: loggedUserId }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              savedToNewsletter: true,
              email: 'janusz.kowalski@gmail.com'
            }
          }
        }
      }
    ];

    renderComponent({ mocks, preloadedState });

    await waitFor(async () => {
      const user = userEvent.setup();
      const nameField = screen.getByPlaceholderText('Imię');
      const surnameField = screen.getByPlaceholderText('Nazwisko');
      const emailField = screen.getByPlaceholderText('Adres email');
      const submitButton = screen.getByText('Zapisz');

      expect(screen.queryByText(VALIDATION_ERROR_MESSAGES.name)).not.toBeInTheDocument();
      expect(screen.queryByText(VALIDATION_ERROR_MESSAGES.surname)).not.toBeInTheDocument();
      expect(screen.queryByText(VALIDATION_ERROR_MESSAGES.email)).not.toBeInTheDocument();

      await user.type(nameField, 'janusz.kowalski@gmail.com');
      await user.type(surnameField, '2321#');
      await user.type(emailField, 'Janusz');
      await userEvent.click(submitButton);

      expect(screen.getByText(VALIDATION_ERROR_MESSAGES.name)).toBeInTheDocument();
      expect(screen.getByText(VALIDATION_ERROR_MESSAGES.surname)).toBeInTheDocument();
      expect(screen.getByText(VALIDATION_ERROR_MESSAGES.email)).toBeInTheDocument();

      await user.clear(nameField);
      await user.type(nameField, 'Janusz');
      await user.clear(surnameField);
      await user.type(surnameField, 'Kowalski');
      await user.clear(emailField);
      await user.type(emailField, 'janusz.kowalski@gmail.com');
      await userEvent.click(submitButton);

      expect(screen.queryByText(VALIDATION_ERROR_MESSAGES.name)).not.toBeInTheDocument();
      expect(screen.queryByText(VALIDATION_ERROR_MESSAGES.surname)).not.toBeInTheDocument();
      expect(screen.queryByText(VALIDATION_ERROR_MESSAGES.email)).not.toBeInTheDocument();
    });
  });

  it('shows loading modal when subscribing is pending', async () => {
    const mocks = [
      {
        request: {
          query: USER_PERSONAL_DETAILS,
          variables: { userId: loggedUserId }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              name: null,
              surname: null,
              email: null,
              phoneNumber: null,
              city: null,
              postalCode: null,
              street: null
            }
          }
        }
      },
      {
        request: {
          query: IS_USER_SAVED_TO_NEWSLETTER,
          variables: { userId: loggedUserId }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              savedToNewsletter: false,
              email: null
            }
          }
        }
      },
      {
        request: {
          query: SUBSCRIBE_TO_NEWSLETTER,
          variables: {
            input: {
              email: 'janusz.kowalski@gmail.com',
              name: 'Janusz',
              surname: 'Kowalski'
            }
          }
        },
        result: {
          data: {
            subscribeUserToNewsletter: {
              id: loggedUserId,
              __typename: 'UserObject'
            }
          }
        },
        delay: 1000
      },
      {
        request: {
          query: IS_USER_SAVED_TO_NEWSLETTER,
          variables: { userId: loggedUserId }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              savedToNewsletter: true,
              email: 'janusz.kowalski@gmail.com'
            }
          }
        }
      }
    ];

    renderComponent({ mocks, preloadedState });

    const user = userEvent.setup();
    await user.type(screen.getByPlaceholderText('Imię'), 'Janusz');
    await user.type(screen.getByPlaceholderText('Nazwisko'), 'Kowalski');
    await user.type(screen.getByPlaceholderText('Adres email'), 'janusz.kowalski@gmail.com');
    await userEvent.click(screen.getByText('Zapisz'));

    await waitFor(async () => {
      expect(screen.queryByText('Prosimy o chwilę cierpliwości')).toBeInTheDocument();
    });
  });

  it('shows success modal when subscribing is successfull', async () => {
    const mocks = [
      {
        request: {
          query: USER_PERSONAL_DETAILS,
          variables: { userId: loggedUserId }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              name: null,
              surname: null,
              email: null,
              phoneNumber: null,
              city: null,
              postalCode: null,
              street: null
            }
          }
        }
      },
      {
        request: {
          query: IS_USER_SAVED_TO_NEWSLETTER,
          variables: { userId: loggedUserId }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              savedToNewsletter: false,
              email: null
            }
          }
        }
      },
      {
        request: {
          query: SUBSCRIBE_TO_NEWSLETTER,
          variables: {
            input: {
              email: 'janusz.kowalski@gmail.com',
              name: 'Janusz',
              surname: 'Kowalski'
            }
          }
        },
        result: {
          data: {
            subscribeUserToNewsletter: {
              id: loggedUserId,
              __typename: 'UserObject'
            }
          }
        }
      },
      {
        request: {
          query: IS_USER_SAVED_TO_NEWSLETTER,
          variables: { userId: loggedUserId }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              savedToNewsletter: true,
              email: 'janusz.kowalski@gmail.com'
            }
          }
        }
      }
    ];

    renderComponent({ mocks, preloadedState });

    const user = userEvent.setup();
    await user.type(screen.getByPlaceholderText('Imię'), 'Janusz');
    await user.type(screen.getByPlaceholderText('Nazwisko'), 'Kowalski');
    await user.type(screen.getByPlaceholderText('Adres email'), 'janusz.kowalski@gmail.com');
    await userEvent.click(screen.getByText('Zapisz'));

    await waitFor(async () => {
      expect(screen.queryByText('Zostałeś zapisany na newsletter!')).toBeInTheDocument();
    });
  });

  it('shows error modal when subscribing is not successfull', async () => {
    const mocks = [
      {
        request: {
          query: USER_PERSONAL_DETAILS,
          variables: { userId: loggedUserId }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              name: null,
              surname: null,
              email: null,
              phoneNumber: null,
              city: null,
              postalCode: null,
              street: null
            }
          }
        }
      },
      {
        request: {
          query: IS_USER_SAVED_TO_NEWSLETTER,
          variables: { userId: loggedUserId }
        },
        result: {
          data: {
            user: {
              __typename: 'UserObject',
              id: loggedUserId,
              savedToNewsletter: false,
              email: null
            }
          }
        }
      },
      {
        request: {
          query: SUBSCRIBE_TO_NEWSLETTER,
          variables: {
            input: {
              email: 'janusz.kowalski@gmail.com',
              name: 'Janusz',
              surname: 'Kowalski'
            }
          }
        },
        error: new Error('Unknown error!')
      }
    ];

    renderComponent({ mocks, preloadedState });

    const user = userEvent.setup();
    await user.type(screen.getByPlaceholderText('Imię'), 'Janusz');
    await user.type(screen.getByPlaceholderText('Nazwisko'), 'Kowalski');
    await user.type(screen.getByPlaceholderText('Adres email'), 'janusz.kowalski@gmail.com');
    await userEvent.click(screen.getByText('Zapisz'));

    await waitFor(async () => {
      expect(screen.queryByText('Wystąpił niespodziewany problem!')).toBeInTheDocument();
      expect(screen.queryByText('Za utrudnienia przepraszamy')).toBeInTheDocument();
    });
  });
});
