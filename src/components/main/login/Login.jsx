import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../../graphql/mutations/user.js';
import LoginFormValidator from '../../../validators/loginFormValidator.js';
import FormContainer from '../../reusable/containers/FormContainer.jsx';
import TextInput from '../../reusable/inputs/TextInput.jsx';
import SubmitButton from '../../reusable/buttons/SubmitButton.jsx';

// Form instead for FormCHildren and Header instead of HeaderCOntainer

const Login = () => {
  const blockName = 'login';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(false);
  const [loginUser, { data }] = useMutation(LOGIN_USER);

  const handleLoginOnMouseDown = () => {
    const { emailError, passwordError, validationStatus } = new LoginFormValidator({ email, password }).valid();

    setEmailErrorMessage(emailError);
    setPasswordErrorMessage(passwordError);
    if (!validationStatus) return;

    const payload = { input: { email, password } };
    loginUser({ variables: payload });
  };

  const handleEmailOnChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePasswordOnChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const saveUserIdToLocalStore = () => {
    localStorage.setItem('userID', data.user.id);
  };

  if (data?.user) saveUserIdToLocalStore();

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
    </div>
  );
};

export default Login;
