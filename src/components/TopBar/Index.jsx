import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => (
  <nav className="top-bar">
    <div className="top-bar__logo">
      <Link to="/">
        <img
          // src="https://olx-development.s3.eu-central-1.amazonaws.com/logo.svg"
          alt="Budoman logo"
        />
      </Link>
    </div>
    <div className="top-bar__search-engine">
      <input type="text" className="top-bar__search-engine-input" />
    </div>
    <div className="top-bar__login">
      <Link to="/login">
        Logowanie
      </Link>
    </div>
    <div className="top-bar__menu">
      <ul className="top-bar__menu-list">
        <li className="top-bar-list-item">Produkty</li>
        <li className="top-bar-list-item">
          <Link to="/about">
            O nas
          </Link>
        </li>
        <li className="top-bar-list-item">
          <Link to="/opinions">
            Opinie
          </Link>
        </li>
      </ul>
    </div>
    <div className="top-bar__basket">
      0,00 zł
    </div>
  </nav>
);

export default TopBar;
