import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '../reusable/Box.jsx';
import Input from '../reusable/Input.jsx';
import Button from '../reusable/Button.jsx';
import { isEmpty } from 'lodash'; 
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../graphql/mutations/add_user';
import { password as passwordRegx } from '../../constants/regex.js';

const Content = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [avatars, setAvatars] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [addAuthor, { data, error, loading }] = useMutation(ADD_USER)

  const handleFileOnChange = e => setSelectedFiles([...selectedFiles, ...e.target.files])
  const handleEmailOnChange = e => setEmail(e.target.value)
  const handlePasswordOnChange = e => setPassword(e.target.value)
  
  const isPasswordMatchToRegex = passwordRegx.test(password);
  const isPictureLoaded = !isEmpty(avatars)
  
  const validForm = () => isPasswordMatchToRegex && isPictureLoaded

  const handleSubmit = e => {
    e.preventDefault(); 
    if (!validForm()) return null;
 
    addAuthor({
      variables: { input: { email, password, avatars } }
    })
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
          <Input
            type='email'
            placeholder='Email'
            onChange={handleEmailOnChange}
          />
          <Input
            placeholder='Password'
            onChange={handlePasswordOnChange}
          />
          <Input
            type='file'
            onChange={handleFileOnChange}
            inputProps={{ multiple: true }}
          />
          <Button value='Upload' />

          <Box>
            { avatars.map(avatar => <img src={avatar.storagePath} />) }
          </Box>
        </form>
      </Box>
    </Grid>
  )
}

export default Content;
