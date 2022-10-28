import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { USER_PERSONAL_DETAILS } from 'graphql/queries/user.js';
import ValidationMyDetailsHandler from 'handlers/validationMyDetailsHandler.js';
import TextInput from 'components/inputs/TextInput.jsx';
import SubmitButton from 'components/SubmitButton.jsx';

const MyDetails = () => {
  const blockName = 'my-details';
  const { loggedUserId } = useSelector((store) => store.user);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [street, setStreet] = useState('');
  const [nameValidationError, setNameValidationError] = useState('');
  const [surnameValidationError, setSurnameValidationError] = useState('');
  const [phoneNumberValidationError, setPhoneNumberValidationError] = useState('');
  const [cityValidationError, setCityValidationError] = useState('');
  const [postalCodeValidationError, setPostalCodeValidationError] = useState('');
  const [streetValidationError, setStreetValidationError] = useState('');

  const { loading, error, data } = useQuery(
    USER_PERSONAL_DETAILS,
    {
      variables: { userId: loggedUserId },
      fetchPolicy: 'network-only',
      onCompleted: () => {
        const { user } = data;

        setName(user.name);
        setSurname(user.surname);
        setPhoneNumber(user.phoneNumber);
        setCity(user.city);
        setPostalCode(user.postalCode);
        setStreet(user.street);
      }
    }
  );

  const handleNameOnChange = ({ target: { value } }) => setName(value);
  const handleSurnameNameOnChange = ({ target: { value } }) => setSurname(value);
  const handlePhoneNumberOnChange = ({ target: { value } }) => setPhoneNumber(value);
  const handleCityOnChange = ({ target: { value } }) => setCity(value);
  const handlePostalCodeOnChange = ({ target: { value } }) => setPostalCode(value);
  const handleStreetOnChange = ({ target: { value } }) => setStreet(value);

  const updatePersonalData = () => {
    const {
      nameError,
      surnameError,
      phoneNumberError,
      cityError,
      postalCodeError,
      streetError,
      validationStatus
    } = new ValidationMyDetailsHandler({ name, surname, phoneNumber, city, postalCode, street }).call();

    setNameValidationError(nameError);
    setSurnameValidationError(surnameError);
    setPhoneNumberValidationError(phoneNumberError);
    setCityValidationError(cityError);
    setPostalCodeValidationError(postalCodeError);
    setStreetValidationError(streetError);
    if (!validationStatus) return;

    alert('Aktualize dane');
  };

  return (
    <div className={blockName}>
      <h1 className={`${blockName}__header`}>Dane osobowe</h1>
      <div className={`${blockName}__input-wrapper`}>
        <TextInput
          placeholder="Imię"
          classNames={`${blockName}__input`}
          value={name}
          onChange={handleNameOnChange}
          validationError={nameValidationError}
        />
        <TextInput
          placeholder="Nazwisko"
          classNames={`${blockName}__input`}
          value={surname}
          onChange={handleSurnameNameOnChange}
          validationError={surnameValidationError}
        />
        <TextInput
          placeholder="Numer telefonu"
          classNames={`${blockName}__input`}
          value={phoneNumber}
          onChange={handlePhoneNumberOnChange}
          validationError={phoneNumberValidationError}
        />
        <TextInput
          placeholder="Miasto"
          classNames={`${blockName}__input`}
          value={city}
          onChange={handleCityOnChange}
          validationError={cityValidationError}
        />
        <TextInput
          placeholder="Kod pocztowy"
          classNames={`${blockName}__input`}
          value={postalCode}
          onChange={handlePostalCodeOnChange}
          validationError={postalCodeValidationError}
        />
        <TextInput
          placeholder="Ulica"
          classNames={`${blockName}__input`}
          value={street}
          onChange={handleStreetOnChange}
          validationError={streetValidationError}
        />
        <SubmitButton
          value="Aktualizuj dane osobowe"
          onMouseDown={updatePersonalData}
          classNames={`${blockName}__input`}
        />
      </div>
    </div>
  );
};

export default MyDetails;
