import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../../graphql/mutations/user.js';
import FormContainer from '../../reusable/containers/FormContainer.jsx';
import TextInput from '../../reusable/inputs/TextInput.jsx';
import SubmitButton from '../../reusable/buttons/SubmitButton.jsx';

const Login = () => {
  const blockName = 'login';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { data }] = useMutation(LOGIN_USER);

  const handleLoginOnMouseDown = () => {
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
        headerChildren={(
          <Fragment>
            <Link to="/login">
              <span className={`${blockName}__active-link`}>Logowanie </span>
            </Link>
            <Link to="/register">Rejestracja</Link>
          </Fragment>
        )}
        formChildren={(
          <Fragment>
            <TextInput
              placeholder="Adres email"
              classNames="text-input--login"
              value={email}
              onChange={handleEmailOnChange}
            />
            <TextInput
              placeholder="Hasło"
              classNames="text-input--login"
              value={password}
              onChange={handlePasswordOnChange}
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
