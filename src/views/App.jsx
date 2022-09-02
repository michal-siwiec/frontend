import React, { Fragment } from 'react';
import '../styles/style.scss';
import TopBar from 'views/topBar/TopBar.jsx';
import AdvertisingBox from 'views/advertisingBox/advertisingBox.jsx';
import Main from 'views/main/Index.jsx';
import Newsletter from 'views/newsletter/Newsletter.jsx';
import Footer from 'views/footer/Footer.jsx';

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
