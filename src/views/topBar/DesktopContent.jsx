import React from 'react';
import Basket from './elements/Basket.jsx';
import Logo from './elements/Logo.jsx';
import SearchEngine from './elements/SearchEngine.jsx';
import Authorization from './elements/Authorization.jsx';
import MenuList from './elements/MenuList.jsx';

const DesktopContent = () => {
  const blockName = 'top-bar-elements';

  return (
    <div className={blockName}>
      <Logo />
      <SearchEngine />
      <Authorization />
      <MenuList />
      <Basket />
    </div>
  );
};

export default DesktopContent;
