import React from 'react';
import Grid from '@mui/material/Grid'
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
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
          <li className="top-bar__list-item">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="top-bar__list-item">
            <Link to="/services">
              Services
            </Link>
          </li>
          <li className="top-bar__list-item">
            <Link to="/about">
              About
            </Link>
          </li>
          <li className="top-bar__list-item">
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </Grid>
      <Grid item xs={3}>
        <ul className="top-bar__list top-bar__list--authentication">
          <li className="top-bar__list-item">
            <Link to="/login">
              Log in
            </Link>
          </li>
          <li className="top-bar__list-item">
            <Link to="/register">
              Sign in
            </Link>
          </li>
        </ul>
      </Grid>
    </Grid>
  )
}

export default TopBar;
