import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import useRedirect from 'hooks/useRedirect.jsx';
import { LOGIN_USER } from 'graphql/mutations/user.js';
import { login } from 'redux_/user/actionsCreator.js';
import ValidationLoginHandler from 'handlers/validationLoginHandler.js';
import FormContainer from 'components/containers/FormContainer.jsx';
import TextInput from 'components/inputs/TextInput.jsx';
import SubmitButton from 'components/SubmitButton.jsx';

const Login = () => {
  const blockName = 'login';
  const { loggedUserId } = useSelector((store) => store.user);
  const [email, setEmail] = useState('siwiec.michal724@gmail.com');
  const [password, setPassword] = useState('Ab47901825');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const dispatch = useDispatch();
  const [loginUser, { data }] = useMutation(LOGIN_USER, {
    onCompleted: () => dispatch(login(data))
  });

  const handleEmailOnChange = ({ target: { value } }) => setEmail(value);
  const handlePasswordOnChange = ({ target: { value } }) => setPassword(value);

  const handleLoginOnMouseDown = () => {
    const { emailError, passwordError, validationStatus } = new ValidationLoginHandler({ email, password }).call();

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
              <span className={`${blockName}__active-link`}>Logowanie </span>
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
              dataCy="login-submit-btn"
            />
          </Fragment>
        )}
      />
    </div>
  );
};

export default Login;
