import React from 'react';
import Grid from '@mui/material/Grid';
import { socialMediaInfo } from '../../data/components/footer.jsx';

const SocialMedia = () => (
  <Grid
    container
    justifyContent="center"
    alignItems="center"
    xs={3}
    borderTop={1}
  >
    {
      socialMediaInfo.map(({ icon }) => (
        <Grid item className="footer__social-media-square">
          {icon}
        </Grid>
      ))
    }
  </Grid>
);

export default SocialMedia;
