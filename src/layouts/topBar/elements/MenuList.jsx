import React from 'react';
import { Link } from 'react-router-dom';
import { TOP_BAR_MENU_ROUTING } from 'data/routing.js';

const MenuList = () => {
  const blockName = 'top-bar-elements';

  return (
    <div className={`${blockName}__menu`} data-cy="topbar-menu-list">
      <ul className={`${blockName}__menu-list`}>
        {
          TOP_BAR_MENU_ROUTING.map(({ path, name, dataCy }) => (
            <li
              className={`${blockName}__list-item`}
              key={`${blockName}__item-link-${name}`}
              data-cy={dataCy}
            >
              <Link to={path} className={`${blockName}__item-link`}>
                {name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default MenuList;
