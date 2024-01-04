import React, { Fragment } from 'react';
import './styles/style.scss';
import useSetAuthInitialState from 'hooks/useSetAuthInitialState.jsx';
import TopBar from 'layouts/topBar/TopBar.jsx';
import AdvertisingBox from 'layouts/AdvertisingBox.jsx';
import AppRouter from 'views/AppRouter.jsx';
import Newsletter from 'layouts/Newsletter.jsx';
import Footer from 'layouts/Footer.jsx';

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
