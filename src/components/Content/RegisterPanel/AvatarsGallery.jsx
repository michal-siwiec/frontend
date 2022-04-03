import React from 'react';
import Box from '../../reusable/Box.jsx';
import { Avatar } from '@mui/material';

const AvatarsGallery = () => {
  const avatars = []

  return (
    <Box>
      {
        avatars.map((avatar, index) => (
          <img
            src={avatar.storagePath}
            key={`avatar-${index}`}
            onClick={() => handleAvatarOnClick(index)}
          />
        ))
      }
{/* 
      <Box>
        <Avatar
          alt={email}
          src={mainAvatar}
          sx={{ width: 64, height: 64 }}
        />
      </Box> */}
    </Box>
  )
}

export default AvatarsGallery;
