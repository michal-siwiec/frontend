import React, { Fragment } from 'react';
import Basket from './elements/Basket.jsx';
import Logo from './elements/Logo.jsx';
import SearchEngine from './elements/SearchEngine.jsx';
import Authorization from './elements/Authorization.jsx';
import MenuList from './elements/MenuList.jsx';

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
