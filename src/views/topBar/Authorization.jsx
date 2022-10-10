import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGOUT_USER } from 'graphql/mutations/user.js';
import useIsLogged from 'hooks/useIsLogged.jsx';

const Authorization = () => {
  const blockName = 'top-bar';
  const [logoutUser] = useMutation(LOGOUT_USER);
  const isLogged = useIsLogged();

  const handleLogoutUser = () => {
    const userID = localStorage.getItem('userID');
    const payload = { input: { id: userID } };

    logoutUser({ variables: payload });
  };

  return (
    <div className={`${blockName}__authorization`}>
      {
        !isLogged ? (
          <Fragment>
            <span className={`${blockName}__authorization-action`}>
              <Link to="/login">
                Logowanie
              </Link>
            </span>
            <span className={`${blockName}__authorization-action`}>
              <Link to="/register">
                Rejestracja
              </Link>
            </span>
          </Fragment>
        ) : (
          <span
            onMouseDown={handleLogoutUser}
            role="button"
            tabIndex={0}
            className={`${blockName}__authorization-action`}
          >
            Wyloguj
          </span>
        )
      }
    </div>
  );
};

export default Authorization;
