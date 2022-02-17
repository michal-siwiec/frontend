import React from 'react';
import { Alert } from '@mui/material';

const InfoBox = ({ severity, info }) => {
  return (
    <div className='modal'>
      <Alert severity={severity}>{info}</Alert>
    </div>
  )
}

export default InfoBox;
