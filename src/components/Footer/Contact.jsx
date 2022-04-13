import React from 'react';
import Grid from '@mui/material/Grid';
import { contactInfo } from '../../data/components/footer.jsx';

const Contact = () => (
  <Grid item xs={12}>
    <header className="footer__header">
      CONTACT INFORMATION
    </header>
    <div className="footer__contact-elements">
      {
        contactInfo.map(({ icon, header, value }) => (
          <Grid container className="footer__contact-element">
            <Grid
              container
              item 
              xs={1.5}
              justifyContent="center"
              alignItems="center"
            >
              <span className="footer__icon">{icon}</span>
            </Grid>
            <Grid item xs={10.5}>
              <h4 className="footer__contact-header">{header}</h4>
              <p className="footer__text">{value}</p>
            </Grid>
          </Grid>
        ))
      }
    </div>
  </Grid>
);

export default Contact;
