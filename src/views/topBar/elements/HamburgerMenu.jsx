import React from 'react';
import { exact, func } from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';

const HamburgerMenu = ({ handleOnMouseDown }) => {
  const blockName = 'top-bar-elements';

  return (
    <div className={`${blockName}__hamburger-menu-wrapper`} data-cy="topbar-hamburger-menu">
      <MenuIcon
        className={`${blockName}__hamburger-menu-icon icon-hamburger-menu`}
        onMouseDown={handleOnMouseDown}
        role="button"
        tabIndex={0}
      />
    </div>
  );
};

HamburgerMenu.propTypes = exact({
  handleOnMouseDown: func.isRequired
}).isRequired;

export default HamburgerMenu;
