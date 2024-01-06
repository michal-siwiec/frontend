import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { IS_USER_SAVED_TO_NEWSLETTER } from 'graphql/queries/user.js';
import SavedContent from './SavedContent.jsx';
import UnsavedContent from './UnsavedContent.jsx';

const Newsletter = () => {
  const blockName = 'newsletter';
  const [userEmail, setUserEmail] = useState('');
  const [userSavedToNewsletter, setUserSavedToNewsletter] = useState(false);
  const { loggedUserId } = useSelector((store) => store.user);

  const { data, refetch } = useQuery(IS_USER_SAVED_TO_NEWSLETTER, {
    variables: { userId: loggedUserId },
    fetchPolicy: 'network-only',
    onCompleted: () => {
      const { savedToNewsletter, email } = data.user;

      setUserEmail(email);
      setUserSavedToNewsletter(savedToNewsletter);
    }
  });

  return (
    <div className={blockName}>
      <h1 className={`${blockName}__header`}>Newsletter</h1>
      <div className={`${blockName}__content-wrapper`}>
        {
          userSavedToNewsletter
            ? <SavedContent userEmail={userEmail} refetch={refetch} />
            : <UnsavedContent />
        }
      </div>
    </div>
  );
};

export default Newsletter;
