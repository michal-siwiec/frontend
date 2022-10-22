import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { logout } from 'redux_/user/actionsCreator.js';
import { LOGOUT_USER } from 'graphql/mutations/user.js';
import useIsLogged from 'hooks/useIsLogged.jsx';
import Avatar from 'components/Avatar.jsx';

const Authorization = () => {
  const blockName = 'top-bar-elements';
  const dispatch = useDispatch();
  const { loggedUserId, avatars } = useSelector((store) => store.user);
  const isLogged = useIsLogged();
  const [logoutUser] = useMutation(LOGOUT_USER);

  const handleLogoutUser = () => {
    const payload = { input: { id: loggedUserId } };

    logoutUser({ variables: payload });
    dispatch(logout());
  };

  return (
    <div className={`${blockName}__authorization`}>
      {
        !isLogged ? (
          <Fragment>
            <span className={`${blockName}__authorization-action`}>
              <Link to="/login" className={`${blockName}__authorization-action-link`}>
                Logowanie
              </Link>
            </span>
            <span className={`${blockName}__authorization-action`}>
              <Link to="/register" className={`${blockName}__authorization-action-link`}>
                Rejestracja
              </Link>
            </span>
          </Fragment>
        ) : (
          <div>
            <Avatar avatars={avatars} classNames={`${blockName}__avatar`} />
            <span
              onMouseDown={handleLogoutUser}
              role="button"
              tabIndex={0}
              className={`${blockName}__authorization-action ${blockName}__authorization-action-link`}
            >
              Wyloguj
            </span>
          </div>
        )
      }
    </div>
  );
};

export default Authorization;
