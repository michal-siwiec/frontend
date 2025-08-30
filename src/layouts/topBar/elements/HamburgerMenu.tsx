import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

type HamburgerMenuProps = {
  handleOnMouseDown: (...args: any[]) => void
}

const HamburgerMenu = ({ handleOnMouseDown }: HamburgerMenuProps) => {
  const blockName = 'top-bar-elements';

  return (
    <div className={`${blockName}__hamburger-menu-wrapper`}>
      <MenuIcon
        className={`${blockName}__hamburger-menu-icon icon-hamburger-menu`}
        onMouseDown={handleOnMouseDown}
        role="button"
        tabIndex={0}
      />
    </div>
  );
};

export default HamburgerMenu;
