import React from 'react';
import Grid from '@mui/material/Grid';
import { paymentOptionsInfo } from '../../data/components/footer.jsx';
// import CenteringContainer from '../reusable/CenteringContainer.jsx';

const PaymentOptions = () => (
  <Grid
    xs={12}
    sm={6}
    md={4}
    container
    justifyContent="center"
    alignItems="center"
    order={{ sm: 1 }}
    sx={{ marginBottom: 1 }}
    className="footer__payment-options"
  >
    <ul className="footer__payment-options-list">
      {
        paymentOptionsInfo.map(({ src, alt }) => (
          <li>
            <img
              src={src}
              alt={alt}
              className="footer__payment-options-picture"
            />
          </li>
        ))
      }
    </ul>
  </Grid>
);

export default PaymentOptions;
