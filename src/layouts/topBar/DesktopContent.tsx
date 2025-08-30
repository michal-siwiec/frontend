import React from 'react';
import Basket from './elements/basket/Basket.jsx';
import Logo from './elements/Logo';
import Authorization from './elements/Authorization';
import MenuList from './elements/MenuList';

const DesktopContent = () => {
  const blockName = 'top-bar-elements';

  return (
    <div className={blockName}>
      <Logo />
      <Authorization />
      <MenuList />
      <Basket />
    </div>
  );
};

export default DesktopContent;
