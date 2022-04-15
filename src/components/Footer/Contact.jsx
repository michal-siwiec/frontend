import React from 'react';
import Grid from '@mui/material/Grid';
import { contactInfo } from '../../data/components/footer.jsx';
import CenteringContainer from '../reusable/CenteringContainer.jsx';

const Contact = () => (
  <Grid item xs={12}>
    <header className="footer__header">
      CONTACT INFORMATION
    </header>
    <div className="footer__contact-elements">
      {
        contactInfo.map(({ icon, header, value }) => (
          <Grid container className="footer__contact-element">
            <CenteringContainer columnQuantity={1.5} isItem>
              <span className="footer__icon">{icon}</span>
            </CenteringContainer>
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
