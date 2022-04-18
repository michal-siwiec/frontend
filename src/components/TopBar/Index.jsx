import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { mainLinksProperties, authenticationLinksProperties } from '../../data/components/topbar';

const TopBar = () => (
  <Grid container xs={12} border={1} px={5} py={1} alignItems="center" className="top-bar">
    <Grid item xs={3}>
      <img
        src="https://olx-development.s3.eu-central-1.amazonaws.com/punkta-logo.svg"
        alt=""
        className="top-bar__logo"
      />
    </Grid>
    <Grid item xs={6}>
      <ul className="top-bar__list">
        {
          mainLinksProperties.map(({ url, label }) => (
            <li className="top-bar__list-item">
              <Link to={url}>
                {label}
              </Link>
            </li>
          ))
        }
      </ul>
    </Grid>
    <Grid item xs={3}>
      <ul className="top-bar__list top-bar__list--authentication">
        {
          authenticationLinksProperties.map(({ url, label }) => (
            <li className="top-bar__list-item">
              <Link to={url}>
                {label}
              </Link>
            </li>
          ))
        }
      </ul>
    </Grid>
  </Grid>
);

export default TopBar;
