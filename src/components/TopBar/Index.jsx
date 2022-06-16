import React from 'react';
import { Link } from 'react-router-dom';
import { STORAGE_URL } from '../../constants/environment';

const TopBar = () => {
  const blockName = 'top-bar';

  return (
    <nav className={blockName}>
      <div className={`${blockName}__logo`}>
        <Link to="/">
          <img
            // src={`${STORAGE_URL}/logo.svg`}
            src=""
            alt="Budoman logo"
          />
        </Link>
      </div>
      <div className={`${blockName}__search-engine`}>
        <input type="text" className={`${blockName}__search-engine-input`} />
      </div>
      <div className={`${blockName}__login`}>
        <Link to="/login">
          Logowanie
        </Link>
      </div>
      <div className={`${blockName}__menu`}>
        <ul className={`${blockName}__menu-list`}>
          <li className={`${blockName}__list-item`}>Produkty</li>
          <li className={`${blockName}__list-item`}>
            <Link to="/about">
              O nas
            </Link>
          </li>
          <li className={`${blockName}__list-item`}>
            <Link to="/opinions">
              Opinie
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${blockName}__basket`}>
        0,00 zł
      </div>
    </nav>
  )
};
  
export default TopBar;
