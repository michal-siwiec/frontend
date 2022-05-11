import React from 'react';
import Grid from '@mui/material/Grid';
import CenteringContainer from '../reusable/CenteringContainer.jsx';
import { socialMediaInfo } from '../../data/components/footer.jsx';

const SocialMedia = () => (
  <CenteringContainer
    xs={12}
    sm={6}
    md={3}
    order={{ sm: 2 }}
    container
    justifyContent="center"
    alignItems="center"
  >
    {
      socialMediaInfo.map(({ icon }) => (
        <Grid item className="footer__social-media-square">
          {icon}
        </Grid>
      ))
    }
  </CenteringContainer>
);

export default SocialMedia;
