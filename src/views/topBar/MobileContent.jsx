import React, { Fragment, useState } from 'react';
import Logo from './elements/Logo.jsx';
import HamburgerMenu from './elements/HamburgerMenu.jsx';
import Drawer from 'components/Drawer.jsx';
import Authorization from './elements/Authorization.jsx';
import MenuList from './elements/MenuList.jsx';
import Basket from './elements/Basket.jsx';
import SearchEngine from './elements/SearchEngine.jsx';

const MobileContent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <Fragment>
      <Logo />
      <HamburgerMenu handleOnMouseDown={openDrawer} />
      <Drawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        className="drawer--top-bar"
      >
        <Fragment>
          <Authorization />
          <MenuList />
          <Basket />
          <SearchEngine />
        </Fragment>
      </Drawer>
    </Fragment>
  );
};

export default MobileContent;
