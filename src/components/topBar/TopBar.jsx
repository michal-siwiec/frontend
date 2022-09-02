import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGOUT_USER } from 'graphql/mutations/user.js';
import { STORAGE_URL } from 'utils/environment.js';
import { menuItemsProperties } from './data.js';
import Basket from './basket/Basket.jsx';
import TextInput from '../reusable/inputs/TextInput.jsx';

const TopBar = () => {
  const blockName = 'top-bar';
  const [logoutUser] = useMutation(LOGOUT_USER);

  const handleLogoutUser = () => {
    const userID = localStorage.getItem('userID');
    const payload = { input: { id: userID } };

    logoutUser({ variables: payload });
  };

  return (
    <nav className={blockName}>
      <div className={`${blockName}__logo`}>
        <Link to="/">
          <img src={`${STORAGE_URL}/images/logo.svg`} alt="Budoman logo" className={`${blockName}__logo-img`} />
        </Link>
      </div>
      <div className={`${blockName}__search-engine`}>
        <TextInput
          placeholder="Wyszukaj produktów"
          classNames="text-input--search-engine"
          value=""
          onChange={() => {}}
        />
      </div>
      <div className={`${blockName}__login`}>
        <Link to="/login">
          Logowanie
        </Link>
        <div
          onMouseDown={handleLogoutUser}
          role="button"
          tabIndex={0}
        >
          Wyloguj
        </div>
      </div>
      <div className={`${blockName}__menu`}>
        <ul className={`${blockName}__menu-list`}>
          {
            menuItemsProperties.map(({ path, name }) => (
              <li
                className={`${blockName}__list-item`}
                key={`${blockName}__item-link-${name}`}
              >
                <Link to={path} className={`${blockName}__item-link`}>
                  {name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <Basket />
    </nav>
  );
};

export default TopBar;
