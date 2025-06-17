import React, { Fragment, useState } from 'react';
import Logo from './elements/Logo.jsx';
import HamburgerMenu from './elements/HamburgerMenu.jsx';
import Drawer from 'components/Drawer.jsx';
import Authorization from './elements/Authorization.jsx';
import MenuList from './elements/MenuList.jsx';
import Basket from './elements/basket/Basket.jsx';
import SearchEngine from './elements/SearchEngine.jsx';

const MobileContent = () => {
  const blockName = 'top-bar-elements';
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Fragment>
      <div className={blockName}>
        <Logo />
        <HamburgerMenu handleOnMouseDown={() => setIsDrawerOpen(true)} />
      </div>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        className="drawer--top-bar"
      >
        <div className={`${blockName} ${blockName}--drawer`} data-testid="menu-drawer">
          <Authorization />
          <div className={`${blockName}__divider`} />
          <MenuList />
          <div className={`${blockName}__divider`} />
          <Basket />
          <SearchEngine />
        </div>
      </Drawer>
    </Fragment>
  );
};

export default MobileContent;
