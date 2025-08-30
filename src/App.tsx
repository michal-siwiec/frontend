import React, { Fragment } from 'react';
import './styles/style.scss';
import useSetAuthInitialState from 'hooks/useSetAuthInitialState.jsx';
import TopBar from 'layouts/topBar/TopBar.jsx';
import AdvertisingBox from 'layouts/AdvertisingBox.tsx';
import AppRouter from 'pages/AppRouter.jsx';
import Newsletter from 'layouts/Newsletter.tsx';
import Footer from 'layouts/Footer.tsx';

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
