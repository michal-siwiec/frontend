import React from 'react';
import Grid from '@mui/material/Grid';
import CenteringContainer from '../reusable/CenteringContainer.jsx';
import { socialMediaInfo } from '../../data/components/footer.jsx';

const SocialMedia = () => (
  <CenteringContainer
    columnQuantity={3}
    className="footer__social-media"
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
