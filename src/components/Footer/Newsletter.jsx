import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { useMutation } from '@apollo/client';
import { SUBSCRIBE_TO_NEWSLETTER } from '../../graphql/mutations/user';
import Input from '../reusable/Input.jsx';
import EmailValidator from '../../validators/emailValidator';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribeToNewsletter, { data, error, loading }] = useMutation(SUBSCRIBE_TO_NEWSLETTER);

  const handleEmailChange = ({ target: { value } }) => setEmail(value);

  const handleSubmit = () => {
    const emailValidator = new EmailValidator(email);
    if (!emailValidator.valid()) return null;

    subscribeToNewsletter({ variables: { email }});
  };

  return (
    <Grid item xs={12} md={4} mb={{ xs: 3, lg: 0 }}>
      <header className="footer__header">
        NEWSLETTER
      </header>
      <Grid item sx={{ marginBottom: 3 }}>
        Get all the nawest information on Events,
        <br />sales and offers.
        <br/>Sign up for newsletter today.
      </Grid>
      <Grid item container className="footer__newsletter-form">
        <Grid item xs={8}>
          <Input
            placeholder="Email"
            className="footer__newsletter-email"
            onChange={handleEmailChange}
            value={email}
          />
        </Grid>
        <Grid item xs={4}>
          {/* <Input
            type="submit"
            value="Wyślij!"
            onChange={() => handleSubmit()}
            className="footer__newsletter-submit"
          /> */}
          <input type="submit" value="wyślij" className="footer__newsletter-submit" onClick={handleSubmit} />
        </Grid>
      </Grid>
    </Grid>
  )
};

export default Newsletter;
