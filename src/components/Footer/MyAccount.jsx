import React from 'react';
import Grid from '@mui/material/Grid';
import { myAccountInfo } from '../../data/components/footer.jsx';

const MyAccount = () => (
  <Grid item xs={4}>
    <header className="footer__header">
      MY ACCOUNT
    </header>
    <ul className="footer__list">
      {
        myAccountInfo.map(({ label }) => (
          <li className="footer__list-item">
            {label}
          </li>
        ))
      }
    </ul>
  </Grid>
);

export default MyAccount;
