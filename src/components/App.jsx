import React, { Fragment } from 'react';
import '../styles/style.scss';
import TopBar from './topBar/TopBar.jsx';
import AdvertisingBox from './advertisingBox/advertisingBox.jsx';
import Main from './main/Index.jsx';
import Newsletter from './newsletter/Newsletter.jsx';
import Footer from './footer/Footer.jsx';

const App = () => (
  <Fragment>
    <TopBar />
    <AdvertisingBox />
    <Main />
    <Newsletter />
    <Footer />
  </Fragment>
);

export default App;
