import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../../graphql/mutations/user.js';

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
    <div className={`main__${blockName} ${blockName}`}>
      <h2 className={`${blockName}__header`}>Logowanie / Mój profil</h2>
      <div className={`${blockName}__form-wrapper`}>
        <div className={`${blockName}__picture-wrapper`} />
        <nav className={`${blockName}__action-toggler`}>
          <div className={`${blockName}__action-tile`}>Zaloguj się</div>
          <div className={`${blockName}__action-tile`}>
            <Link to="/register">
              Rejestracja
            </Link>
          </div>
        </nav>
        <div className={`${blockName}__form`}>
          <div>
            <input
              type="text"
              className={`${blockName}__form-input`}
              value={email}
              onChange={handleEmailOnChange}
            />
          </div>
          <div>
            <input
              type="text"
              className={`${blockName}__form-input`}
              value={password}
              onChange={handlePasswordOnChange}
            />
          </div>
          <div>
            <input type="checkbox" id="remember-me" className={`${blockName}__form-checkbox`} />
            <label htmlFor="remember-me">Zapamiętaj mnie</label>
            <span className={`${blockName}__dont-remember-password`}>Nie pamiętasz hasła?</span>
          </div>
          <div
            className={`${blockName}__button`}
            onMouseDown={handleLoginOnMouseDown}
            role="button"
            tabIndex={0}
          >
            Zaloguj się
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
