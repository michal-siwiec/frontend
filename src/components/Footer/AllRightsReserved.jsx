import React from 'react';
import Grid from '@mui/material/Grid';

const AllRightsReserved = () => (
  <Grid
    container
    justifyContent="center"
    alignItems="center"
    xs={12}
    md={5}
    sx={{ marginBottom: 1 }}
    order={{ sm: 3, md: 2 }}
    className="footer__all-rights-reserved"
  >
    <h5>
      Porto eCommerce 2018. All Rights Reserved
    </h5>
  </Grid>
);

export default AllRightsReserved;
