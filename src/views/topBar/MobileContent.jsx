import React, { Fragment, useState } from 'react';
import Logo from './Logo.jsx';
import HamburgerMenu from './HamburgerMenu.jsx';
import Drawer from 'components/Drawer.jsx';

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
      >
        <h1>sadasda</h1>
      </Drawer>
    </Fragment>
  );
};

export default MobileContent;
