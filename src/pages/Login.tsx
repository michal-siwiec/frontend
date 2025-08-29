// @ts-nocheck
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import useRedirect from 'hooks/useRedirect.jsx';
import { ERROR_CODES } from 'data/errors.ts';
import { LOGIN_USER } from 'graphql/mutations/user.ts';
import { login } from 'redux_/user/actionsCreator.ts';
import { handleLoginValidation } from 'services/user.ts';
import FormContainer from 'components/containers/FormContainer.jsx';
import TextInput from 'components/inputs/TextInput.jsx';
import SubmitButton from 'components/SubmitButton.tsx';
import LoadingModal from 'components/modals/LoadingModal.jsx';
import ErrorModal from 'components/modals/ErrorModal.jsx';

const Login = () => {
  const blockName = 'login';
  const dispatch = useDispatch();
  const { loggedUserId } = useSelector((store) => store.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [loginFail, setLoginFail] = useState(false);
  const [loginFailMessage, setLoginFailMessage] = useState('');

  const [loginUser, { loading, data, error }] = useMutation(LOGIN_USER, {
    onCompleted: () => {
      dispatch(login(data));
    },
    onError: () => {
      if (error.networkError?.statusCode === 500) {
        setLoginFailMessage('Niestety nie udało się zalogować!');
      } else {
        const { extensions: { error_code: errorCode } } = error.graphQLErrors[0];

        if (errorCode === ERROR_CODES.USER_NOT_FOUND) {
          setLoginFailMessage('Użytkownik o takim adresie email nie istnieje!');
        } else if (errorCode === ERROR_CODES.INVALID_CREDENTIALS) {
          setLoginFailMessage('Niepoprawne hasło!');
        } else {
          setLoginFailMessage('Niestety nie udało się zalogować!');
        }
      }

      setLoginFail(true);
    }
  });

  const handleEmailOnChange = ({ target: { value } }) => setEmail(value);
  const handlePasswordOnChange = ({ target: { value } }) => setPassword(value);

  const handleLoginOnMouseDown = () => {
    const { emailError, passwordError, validationStatus } = handleLoginValidation(email, password);
    setEmailErrorMessage(emailError);
    setPasswordErrorMessage(passwordError);
    if (!validationStatus) return;

    loginUser({ variables: { input: { email, password } } });
  };

  const handleModalClose = () => {
    setLoginFail(false);
    setLoginFailMessage('');
  };

  useRedirect({ path: '/', shouldRedirect: !!loggedUserId });

  return (
    <div className={blockName}>
      <FormContainer
        header={(
          <Fragment>
            <Link to="/login">
              <span className={`${blockName}__active-link`}>
                {'Logowanie '}
              </span>
            </Link>
            <Link to="/register">Rejestracja</Link>
          </Fragment>
        )}
        form={(
          <Fragment>
            <TextInput
              placeholder="Adres email"
              classNames="text-input--login"
              value={email}
              onChange={handleEmailOnChange}
              validationError={emailErrorMessage}
              type="email"
            />
            <TextInput
              placeholder="Hasło"
              type="password"
              classNames="text-input--login"
              value={password}
              onChange={handlePasswordOnChange}
              validationError={passwordErrorMessage}
            />
            <SubmitButton
              onMouseDown={handleLoginOnMouseDown}
              classNames="button--login"
              value="Zaloguj się"
            />
          </Fragment>
        )}
      />
      <LoadingModal
        isOpen={loading}
        info="Trwa logowanie użytkownika!"
      />
      <ErrorModal
        isOpen={loginFail}
        handleOnClose={handleModalClose}
        info={loginFailMessage}
      />
    </div>
  );
};

export default Login;
