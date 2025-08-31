import React, { Fragment } from 'react';
import { useMutation } from '@apollo/client';
import { UNSUBSCRIBE_FROM_NEWSLETTER } from 'graphql/mutations/user';
import SubmitButton from 'components/SubmitButton';

type SavedContentProps = {
  userEmail: string,
  handleUnsubscribe: (...args: any[]) => void
};

const SavedContent = ({ userEmail, handleUnsubscribe }: SavedContentProps) => {
  const blockName = 'newsletter';

  const [unsubscribeFromNewsletter] = useMutation(UNSUBSCRIBE_FROM_NEWSLETTER, {
    variables: { email: userEmail },
    onCompleted: handleUnsubscribe
  });

  return (
    <Fragment>
      <h3 className={`${blockName}__status-header`}>Status: Zapisany</h3>
      <p>
        Cieszymy się, że jesteś z nami.<br />
        Liczymy, że treści które reguarnie od nas otrzymujesz sprawiają, że stajesz się bardziej świadomym człowiekiem jak i nabywcą.<br />
        Gdybyś z jakiegoś powodu nie chciał otrzymywać naszego newslettera możesz łatwo wypisać się klikając w przycisk poniżej.
      </p>
      <SubmitButton
        onMouseDown={unsubscribeFromNewsletter}
        value="Wypisz się!"
        classNames={`${blockName}__submit-button`}
      />
    </Fragment>
  );
};

export default SavedContent;
