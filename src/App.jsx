import React, { Fragment } from 'react';
import './styles/style.scss';
import TopBar from 'views/topBar/TopBar.jsx';
import AdvertisingBox from 'views/advertisingBox.jsx';
import Main from 'views/main/Main.jsx';
import Newsletter from 'views/Newsletter.jsx';
import Footer from 'views/Footer.jsx';

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
