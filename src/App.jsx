import React, { Fragment } from 'react';
import './styles/style.scss';
import useSetAuthInitialState from 'hooks/useSetAuthInitialState.jsx';
import TopBar from 'components/topBar/TopBar.jsx';
import AdvertisingBox from 'components/AdvertisingBox.jsx';
import AppRouter from 'views/AppRouter.jsx';
import Newsletter from 'components/Newsletter.jsx';
import Footer from 'components/Footer.jsx';

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
