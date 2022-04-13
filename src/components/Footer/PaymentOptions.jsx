import React from 'react';
import Grid from '@mui/material/Grid';
import { paymentOptionsInfo } from '../../data/components/footer.jsx';

const PaymentOptions = () => (
  <Grid
    item
    container
    justifyContent="center"
    alignItems="center"
    xs={4}
    borderTop={1}
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
