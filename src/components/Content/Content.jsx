import React from 'react';
import { Grid } from '@mui/material';
import Box from '../reusable/Box.jsx';

import Form from './RegisterPanel/Form.jsx';
import AvatarsGallery from './RegisterPanel/AvatarsGallery.jsx';

const Content = () => {
  return (
    <Grid xs={6} minHeight={'70vh'} border={1}>
      <h1>Create Account!</h1>
      <Box>
        <Form />
       <AvatarsGallery />
      </Box>
    </Grid>
  )
}

export default Content;
