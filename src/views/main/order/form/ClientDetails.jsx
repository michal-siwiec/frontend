import React, { useState, useContext } from 'react';
import { OrderContext } from 'contexts/contexts.js';
import ValidationClientDetailsFormHandler from 'validators/validationClientDetailsFormHandler.js';
import TextInput from 'components/inputs/TextInput.jsx';
import SubmitButton from 'components/SubmitButton.jsx';

const ClientDetails = () => {
  const modifier = 'text-input--personal-details';
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [surnameErrorMessage, setSurnameErrorMessage] = useState('');
  const [streetErrorMessage, setStreetErrorMessage] = useState('');
  const [cityErrorMessage, setCityErrorMessage] = useState('');
  const [postalCodeErrorMessage, setPostalCodeErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState('');
  const { setStep } = useContext(OrderContext);

  const handleNameOnChange = ({ target: { value } }) => {
    setName(value);
  };

  const handleSurnameOnChange = ({ target: { value } }) => {
    setSurname(value);
  };

  const handleStreetOnChange = ({ target: { value } }) => {
    setStreet(value);
  };

  const handleCityOnChange = ({ target: { value } }) => {
    setCity(value);
  };

  const handlePostalCodeOnChange = ({ target: { value } }) => {
    setPostalCode(value);
  };

  const handleEmailOnChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePhoneNumberOnChange = ({ target: { value } }) => {
    setPhoneNumber(value);
  };

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
    } = new ValidationClientDetailsFormHandler({
      name,
      surname,
      street,
      city,
      postalCode,
      email,
      phoneNumber
    }).call();

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
        value="Zapisz"
      />
    </div>
  );
};

export default ClientDetails;
