import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'types/store';
import { useQuery } from '@apollo/client';
import { IS_USER_SAVED_TO_NEWSLETTER } from 'graphql/queries/user';
import SavedContent from './SavedContent';
import UnsavedContent from './UnsavedContent';

const Newsletter = () => {
  const blockName = 'newsletter';
  const [userEmail, setUserEmail] = useState('');
  const [userSavedToNewsletter, setUserSavedToNewsletter] = useState(false);
  const { loggedUserId } = useSelector((store: RootState) => store.user);

  const { refetch } = useQuery(IS_USER_SAVED_TO_NEWSLETTER, {
    variables: { userId: loggedUserId },
    fetchPolicy: 'network-only',
    onCompleted: ({ user: { email, savedToNewsletter } }) => {
      setUserEmail(email);
      setUserSavedToNewsletter(savedToNewsletter);
    }
  });

  const handleUnsubscribe = async () => {
    const { data: { user: { savedToNewsletter, email } } } = await refetch();

    setUserEmail(email);
    setUserSavedToNewsletter(savedToNewsletter);
  };

  return (
    <div className={blockName}>
      <h1 className={`${blockName}__header`}>Newsletter</h1>
      <div className={`${blockName}__content-wrapper`}>
        {
          userSavedToNewsletter
            ? <SavedContent userEmail={userEmail} handleUnsubscribe={handleUnsubscribe} />
            : <UnsavedContent />
        }
      </div>
    </div>
  );
};

export default Newsletter;
