import React from 'react';
import Grid from '@mui/material/Grid';

const Newsletter = () => (
  <Grid item xs={4} className="footer__newsletter">
    <header className="footer__header">
      NEWSLETTER
    </header>
    <Grid item>
      Get all the nawest information on Events,
      <br />sales and offers.
      <br/>Sign up for newsletter today.
    </Grid>
    <Grid item className="footer__newsletter-form">
      <input type="email" className="footer__newsletter-email" />
      <input type="submit" value="Go!" className="footer__newsletter-submit" />
    </Grid>
  </Grid>
);

export default Newsletter;
