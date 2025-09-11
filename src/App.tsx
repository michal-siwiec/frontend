import React, { Fragment } from 'react';
import './styles/style.scss';
import useSetAuthInitialState from 'hooks/useSetAuthInitialState';
import TopBar from 'layouts/topBar/TopBar';
import AdvertisingBox from 'layouts/AdvertisingBox';
import AppRouter from 'pages/AppRouter';
import Newsletter from 'layouts/Newsletter';
import Footer from 'layouts/Footer';

const App = () => {
  useSetAuthInitialState();

  return (
    <Fragment>
      <TopBar />
      <AdvertisingBox />
      <AppRouter />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default App;
