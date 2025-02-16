import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import useRedirect from 'hooks/useRedirect.jsx';
import { LOGIN_USER } from 'graphql/mutations/user.js';
import { login } from 'redux_/user/actionsCreator.js';
import handleLoginValidation from 'services/users/handleLoginValidation.js';
import FormContainer from 'components/containers/FormContainer.jsx';
import TextInput from 'components/inputs/TextInput.jsx';
import SubmitButton from 'components/SubmitButton.jsx';
import LoadingModal from 'components/modals/LoadingModal.jsx';
import ErrorModal from 'components/modals/ErrorModal.jsx';

const Login = () => {
  const blockName = 'login';
  const { loggedUserId } = useSelector((store) => store.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [loginFail, setLoginFail] = useState(false);
  const dispatch = useDispatch();
  const [loginUser, { loading, data }] = useMutation(LOGIN_USER, {
    onCompleted: () => {
      dispatch(login(data));
    },
    onError: () => {
      setLoginFail(true);
    }
  });

  const handleEmailOnChange = ({ target: { value } }) => setEmail(value);
  const handlePasswordOnChange = ({ target: { value } }) => setPassword(value);

  const handleLoginOnMouseDown = () => {
    const { emailError, passwordError, validationStatus } = handleLoginValidation({ email, password });

    setEmailErrorMessage(emailError);
    setPasswordErrorMessage(passwordError);
    if (!validationStatus) return;

    const payload = { input: { email, password } };
    loginUser({ variables: payload });
  };

  useRedirect({ path: '/', shouldRedirect: !!loggedUserId });

  return (
    <div className={blockName}>
      <FormContainer
        header={(
          <Fragment>
            <Link to="/login">
              <span
                className={`${blockName}__active-link`}
                data-cy="login-header"
              >
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
              autocomplete="email"
              dataCy="login-email-input"
            />
            <TextInput
              placeholder="Hasło"
              type="password"
              classNames="text-input--login"
              value={password}
              onChange={handlePasswordOnChange}
              validationError={passwordErrorMessage}
              dataCy="login-password-input"
            />
            <SubmitButton
              onMouseDown={handleLoginOnMouseDown}
              classNames="button--login"
              value="Zaloguj się"
              dataCy="login-submit-btn"
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
        handleOnClose={() => setLoginFail(false)}
        info="Niestety nie udało się zalogować!"
      />
    </div>
  );
};

export default Login;
