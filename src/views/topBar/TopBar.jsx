import React from 'react';
import Basket from './Basket.jsx';
import Logo from './Logo.jsx';
import SearchEngine from './SearchEngine.jsx';
import Authorization from './Authorization.jsx';
import MenuList from './MenuList.jsx';

const TopBar = () => {
  const blockName = 'top-bar';

  return (
    <nav className={blockName}>
      <Logo />
      <SearchEngine />
      <Authorization />
      <MenuList />
      <Basket />
    </nav>
  );
};

export default TopBar;
