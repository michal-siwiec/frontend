import React, { useState, useEffect, useRef } from 'react';
import { Grid, Avatar, TextField } from '@mui/material';
import { useMutation } from '@apollo/client';
import { isEmpty } from 'lodash'; 
import { ADD_USER } from '../../graphql/mutations/add_user';
import { password as passwordRegx } from '../../constants/regex.js';
import Box from '../reusable/Box.jsx';
import Input from '../reusable/Input.jsx';
import Button from '../reusable/Button.jsx';
import InfoBox from '../reusable/InfoBox.jsx';
import DepartingBox from '../reusable/animatedContainers/DepartingBox.jsx'

const Content = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [avatars, setAvatars] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userJustAdded, setUserJustAdded] = useState(false);
  const fileInput = useRef(null);

  const [addAuthor, { data, error, loading }] = useMutation(ADD_USER);

  const handleFileOnChange = e => setSelectedFiles([...selectedFiles, ...e.target.files])
  const handleEmailOnChange = e => setEmail(e.target.value)
  const handlePasswordOnChange = e => setPassword(e.target.value)
  const handleAvatarOnClick = avatar_index => {
    const transformedAvatars = avatars.map((avatar, index) => ({ ...avatar, main: index === avatar_index }))
    setAvatars(transformedAvatars)
  }
  
  const isPasswordMatchToRegex = passwordRegx.test(password);
  const isPictureLoaded = !isEmpty(avatars);
  const mainAvatar = avatars.find(avatar => avatar.main)?.storagePath;

  const validForm = () => isPasswordMatchToRegex && isPictureLoaded
  const invokeGraphqlRequest = () => (
    addAuthor({
      variables: { input: { email, password, avatars } }
    })
  )
  const resetFormState = () => {
    setSelectedFiles([]);
    setAvatars([]);
    setEmail('');
    setPassword('');
    fileInput.current.value = ""
  };

  const handleVisibleUserAddedModal = () => {
    setUserJustAdded(true)
    setTimeout(() => {
      setUserJustAdded(false)
    }, 10000)
  }

  const handleSubmit = e => {
    e.preventDefault(); 
    if (!validForm()) return null;
 
    invokeGraphqlRequest();
    resetFormState();
    handleVisibleUserAddedModal()
  }

  useEffect(() => {
    const avatars = selectedFiles.map((file, index) => {
      const decodedAvatar = URL.createObjectURL(file);
      const main = index === 0 ? true : false;

      return { main, storagePath: decodedAvatar }
    });
    setAvatars(avatars);
  }, [selectedFiles])

  return (
    <Grid xs={6} minHeight={'70vh'} border={1}>
      <h1>Create Account!</h1>
      <Box>
        <form enctype='multipart/form-data' onSubmit={handleSubmit}>
          <DepartingBox order={1}>
            <Input
              type='email'
              placeholder='Email'
              onChange={handleEmailOnChange}
              value={email}
            />
          </DepartingBox>
          <DepartingBox order={2}>
            <Input
              placeholder='Password'
              onChange={handlePasswordOnChange}
              value={password}
            />
          </DepartingBox>
          <DepartingBox order={3}>
            <Input
              type='file'
              onChange={handleFileOnChange}
              inputProps={{ multiple: true }}
              inputRef={fileInput}
            />
          </DepartingBox>
          <Button value='Upload' />
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
          </Box>
        </form>
      </Box>
      <Box>
        <Avatar
          alt={email}
          src={mainAvatar}
          sx={{ width: 64, height: 64 }}
        />
      </Box>
      { userJustAdded && <InfoBox severity='warning' info='User was added succesfully'/> }
    </Grid>
  )
}

export default Content;
