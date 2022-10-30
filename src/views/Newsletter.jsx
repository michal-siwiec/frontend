import React, { Fragment, useState } from 'react';
import { useMutation } from '@apollo/client';
import { SUBSCRIBE_TO_NEWSLETTER } from 'graphql/mutations/user.js';
import ValidationNewsletterHandler from 'handlers/validationNewsletterHandler.js';
import FormContainer from 'components/containers/FormContainer.jsx';
import TextInput from 'components/inputs/TextInput.jsx';
import SubmitButton from 'components/SubmitButton.jsx';
import SuccessModal from 'components/modals/SuccessModal.jsx';
import LoadingModal from 'components/modals/LoadingModal.jsx';
import ErrorModal from 'components/modals/ErrorModal.jsx';

const Newsletter = () => {
  const blockName = 'newsletter';
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [surnameErrorMessage, setSurnameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [subscribingToNewsletterSuccess, setSubscribingToNewsletterSuccess] = useState(false);
  const [subscribingToNewsletterError, setSubscribingToNewsletterError] = useState(false);

  const [subscribeToNewsletter, { loading: subscribingToNewsletterLoading }] = useMutation(SUBSCRIBE_TO_NEWSLETTER, {
    variables: { input: { email, name, surname } },
    onCompleted: () => setSubscribingToNewsletterSuccess(true),
    onError: () => setSubscribingToNewsletterError(true)
  });

  const handleNameOnChange = ({ target: { value } }) => setName(value);
  const handleSurnameOnChange = ({ target: { value } }) => setSurname(value);
  const handleEmailOnChange = ({ target: { value } }) => setEmail(value);

  const handleSaveToNewsletter = () => {
    const {
      nameError,
      surnameError,
      emailError,
      validationStatus
    } = new ValidationNewsletterHandler({ name, surname, email }).call();

    setNameErrorMessage(nameError);
    setSurnameErrorMessage(surnameError);
    setEmailErrorMessage(emailError);
    if (!validationStatus) return;

    subscribeToNewsletter();
  };

  return (
    <div className={blockName}>
      <FormContainer
        header="Zapisz się na newsletter aby być na bieżąco!"
        form={(
          <Fragment>
            <TextInput
              placeholder="Imię"
              classNames="text-input--newsletter"
              value={name}
              onChange={handleNameOnChange}
              validationError={nameErrorMessage}
            />
            <TextInput
              placeholder="Nazwisko"
              classNames="text-input--newsletter"
              value={surname}
              onChange={handleSurnameOnChange}
              validationError={surnameErrorMessage}
            />
            <TextInput
              placeholder="Adres email"
              classNames="text-input--newsletter"
              value={email}
              onChange={handleEmailOnChange}
              validationError={emailErrorMessage}
            />
            <SubmitButton
              onMouseDown={handleSaveToNewsletter}
              value="Zapisz"
              classNames="button--newsletter"
            />
          </Fragment>
        )}
      />
      { subscribingToNewsletterLoading && <LoadingModal info="Jesteś zapisywany na newsletter!" /> }
      <SuccessModal
        isOpen={subscribingToNewsletterSuccess}
        handleOnClose={() => setSubscribingToNewsletterSuccess(false)}
        info="Zostałeś zapisany na newsletter!"
      />
      <ErrorModal
        isOpen={subscribingToNewsletterError}
        handleOnClose={() => setSubscribingToNewsletterError(false)}
        info="Niestety nie udało się zapisać na newsletter!"
      />
    </div>
  );
};

export default Newsletter;
