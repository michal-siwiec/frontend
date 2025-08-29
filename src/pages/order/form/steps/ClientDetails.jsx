import React, { useState, useEffect, useContext } from 'react';
import { useLazyQuery } from '@apollo/client';
import { USER_PERSONAL_DETAILS } from 'graphql/queries/user.ts';
import { useSelector, useDispatch } from 'react-redux';
import useIsLogged from 'hooks/useIsLogged.jsx';
import {
  setName,
  setSurname,
  setStreet,
  setCity,
  setPostalCode,
  setEmail,
  setPhoneNumber
} from 'redux_/order/actionsCreator.ts';
import { OrderContext } from 'contexts/contexts.ts';
import { handleClientDetailsValidation } from 'services/user.ts';
import TextInput from 'components/inputs/TextInput.jsx';
import SubmitButton from 'components/SubmitButton.tsx';

const ClientDetails = () => {
  const modifier = 'text-input--personal-details';
  const isLogged = useIsLogged();
  const { setStep } = useContext(OrderContext);
  const dispatch = useDispatch();
  const {
    user: { loggedUserId },
    order: { clientDetails: { name, surname, street, city, postalCode, email, phoneNumber } }
  } = useSelector((store) => store);

  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [surnameErrorMessage, setSurnameErrorMessage] = useState('');
  const [streetErrorMessage, setStreetErrorMessage] = useState('');
  const [cityErrorMessage, setCityErrorMessage] = useState('');
  const [postalCodeErrorMessage, setPostalCodeErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState('');

  const handleNameOnChange = ({ target: { value } }) => dispatch(setName(value));
  const handleSurnameOnChange = ({ target: { value } }) => dispatch(setSurname(value));
  const handleStreetOnChange = ({ target: { value } }) => dispatch(setStreet(value));
  const handleCityOnChange = ({ target: { value } }) => dispatch(setCity(value));
  const handlePostalCodeOnChange = ({ target: { value } }) => dispatch(setPostalCode(value));
  const handleEmailOnChange = ({ target: { value } }) => dispatch(setEmail(value));
  const handlePhoneNumberOnChange = ({ target: { value } }) => dispatch(setPhoneNumber(value));

  const setDefaultClientDetailsIfNeeded = (user) => {
    if (!name) dispatch(setName(user.name || ''));
    if (!surname) dispatch(setSurname(user.surname || ''));
    if (!street) dispatch(setStreet(user.street || ''));
    if (!city) dispatch(setCity(user.city || ''));
    if (!postalCode) dispatch(setPostalCode(user.postalCode || ''));
    if (!email) dispatch(setEmail(user.email || ''));
    if (!phoneNumber) dispatch(setPhoneNumber(user.phoneNumber || ''));
  };

  const [getUserPersonalDetails] = useLazyQuery(
    USER_PERSONAL_DETAILS,
    {
      variables: { userId: loggedUserId },
      fetchPolicy: 'network-only',
      onCompleted: (response) => setDefaultClientDetailsIfNeeded(response.user)
    }
  );

  const handleSubmitOnMouseDown = () => {
    const {
      nameError,
      surnameError,
      streetError,
      cityError,
      postalCodeError,
      emailError,
      phoneError,
      validationStatus
    } = handleClientDetailsValidation(name, surname, street, city, postalCode, email, phoneNumber);

    if (!validationStatus) {
      setNameErrorMessage(nameError);
      setSurnameErrorMessage(surnameError);
      setStreetErrorMessage(streetError);
      setCityErrorMessage(cityError);
      setPostalCodeErrorMessage(postalCodeError);
      setEmailErrorMessage(emailError);
      setPhoneNumberErrorMessage(phoneError);
      return;
    }

    setStep(1);
  };

  useEffect(() => {
    if (isLogged) {
      getUserPersonalDetails();
    } 
  }, [isLogged])

  return (
    <div className="order__form-part-container">
      <TextInput
        placeholder="Imię"
        classNames={modifier}
        value={name}
        onChange={handleNameOnChange}
        validationError={nameErrorMessage}
      />
      <TextInput
        placeholder="Nazwisko"
        classNames={modifier}
        value={surname}
        onChange={handleSurnameOnChange}
        validationError={surnameErrorMessage}
      />
      <TextInput
        placeholder="Ulica"
        classNames={modifier}
        value={street}
        onChange={handleStreetOnChange}
        validationError={streetErrorMessage}
      />
      <TextInput
        placeholder="Miasto"
        classNames={modifier}
        value={city}
        onChange={handleCityOnChange}
        validationError={cityErrorMessage}
      />
      <TextInput
        placeholder="Kod pocztowy"
        classNames={modifier}
        value={postalCode}
        onChange={handlePostalCodeOnChange}
        validationError={postalCodeErrorMessage}
      />
      <TextInput
        placeholder="Adres email"
        classNames={modifier}
        value={email}
        onChange={handleEmailOnChange}
        validationError={emailErrorMessage}
      />
      <TextInput
        placeholder="Numer telefonu"
        classNames={modifier}
        value={phoneNumber}
        onChange={handlePhoneNumberOnChange}
        validationError={phoneNumberErrorMessage}
      />
      <SubmitButton
        classNames="button--client-details"
        onMouseDown={handleSubmitOnMouseDown}
        value="Dalej"
      />
    </div>
  );
};

export default ClientDetails;
