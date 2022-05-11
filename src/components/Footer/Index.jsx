import React from 'react';
import Grid from '@mui/material/Grid';
import Contact from './Contact.jsx';
import MyAccount from './MyAccount.jsx';
import MainFeatures from './MainFeatures.jsx';
import Newsletter from './Newsletter.jsx';
import PaymentOptions from './PaymentOptions.jsx';
import AllRightsReserved from './AllRightsReserved.jsx';
import SocialMedia from './SocialMedia.jsx';

// Add theme for set the same brakpoint like in _variables.scss

const Footer = () => (
  <footer className="footer">
    <Grid xs={12} lg={4} mb={{ xs: 3, lg: 0 }} px={2}>
      <Contact />
    </Grid>
    <Grid container xs={12} lg={8} px={2}>
      <Grid container mb={{ xs: 0, lg: 5 }}>
        <MyAccount />
        <MainFeatures />
        <Newsletter />
      </Grid>
      <Grid container className="footer__bottom-wrapper">
        <PaymentOptions />
        <AllRightsReserved />
        <SocialMedia />
      </Grid>
    </Grid>
  </footer>
);

export default Footer;
