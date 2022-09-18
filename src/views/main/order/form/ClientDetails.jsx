import React, { useState, useContext } from 'react';
import { OrderContext } from 'contexts/contexts.js';
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
  const { step, setStep } = useContext(OrderContext);

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
    setStep(2);
  };

  // if (step !== 0) return null;

  return (
    <div className="order__form-part-container">
      <TextInput
        placeholder="Imię"
        classNames={modifier}
        value={name}
        onChange={handleNameOnChange}
      />
      <TextInput
        placeholder="Nazwisko"
        classNames={modifier}
        value={surname}
        onChange={handleSurnameOnChange}
      />
      <TextInput
        placeholder="Ulica"
        classNames={modifier}
        value={street}
        onChange={handleStreetOnChange}
      />
      <TextInput
        placeholder="Miasto"
        classNames={modifier}
        value={city}
        onChange={handleCityOnChange}
      />
      <TextInput
        placeholder="Kod pocztowy"
        classNames={modifier}
        value={postalCode}
        onChange={handlePostalCodeOnChange}
      />
      <TextInput
        placeholder="Adres email"
        classNames={modifier}
        value={email}
        onChange={handleEmailOnChange}
      />
      <TextInput
        placeholder="Numer telefonu"
        classNames={modifier}
        value={phoneNumber}
        onChange={handlePhoneNumberOnChange}
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
