import React from 'react';
import { Link } from 'react-router-dom';
import { menuItemsProperties } from 'data/topBar.js';

const MenuList = () => {
  const blockName = 'top-bar-elements';

  return (
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
  );
};

export default MenuList;
