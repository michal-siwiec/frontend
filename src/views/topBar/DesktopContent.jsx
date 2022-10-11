import React, { Fragment } from 'react';
import Basket from './Basket.jsx';
import Logo from './Logo.jsx';
import SearchEngine from './SearchEngine.jsx';
import Authorization from './Authorization.jsx';
import MenuList from './MenuList.jsx';

const DesktopContent = () => (
  <Fragment>
    <Logo />
    <SearchEngine />
    <Authorization />
    <MenuList />
    <Basket />
  </Fragment>
);

export default DesktopContent;
