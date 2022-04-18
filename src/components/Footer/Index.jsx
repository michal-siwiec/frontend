import React from 'react';
import Grid from '@mui/material/Grid';
import Contact from './Contact.jsx';
import MyAccount from './MyAccount.jsx';
import MainFeatures from './MainFeatures.jsx';
import Newsletter from './Newsletter.jsx';
import PaymentOptions from './PaymentOptions.jsx';
import AllRightsReserved from './AllRightsReserved.jsx';
import SocialMedia from './SocialMedia.jsx';

const Footer = () => (
  <footer className="footer">
    <Grid container xs={4}>
      <Contact />
    </Grid>
    <Grid container xs={8}>
      <Grid container mb={5}>
        <MyAccount />
        <MainFeatures />
        <Newsletter />
      </Grid>
      <Grid container>
        <PaymentOptions />
        <AllRightsReserved />
        <SocialMedia />
      </Grid>
    </Grid>
  </footer>
);

export default Footer;
