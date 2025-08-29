import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useQuery, useMutation } from '@apollo/client';
import { USER_PERSONAL_DETAILS } from 'graphql/queries/user.ts';
import { UPDATE_USER_DETAILS } from 'graphql/mutations/user.ts';
import { handleMyDetailsValidation } from 'services/user.ts';
import TextInput from 'components/inputs/TextInput.jsx';
import SubmitButton from 'components/SubmitButton.tsx';
import SuccessModal from 'components/modals/SuccessModal.tsx';
import LoadingModal from 'components/modals/LoadingModal.tsx';
import ErrorModal from 'components/modals/ErrorModal.tsx';

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
  const [getPersonalDetailsDataError, setGetPersonalDetailsDataError] = useState(false);
  const [updateUserDetailsSuccess, setUpdateUserDetailsSuccess] = useState(false);
  const [updateUserDetailsError, setUpdateUserDetailsError] = useState(false);

  const { loading: personalDetailsDataLoading } = useQuery(
    USER_PERSONAL_DETAILS,
    {
      variables: { userId: loggedUserId },
      fetchPolicy: 'network-only',
      onCompleted: ({ user }) => {
        setName(user.name || '');
        setSurname(user.surname || '');
        setPhoneNumber(user.phoneNumber || '');
        setCity(user.city || '');
        setPostalCode(user.postalCode || '');
        setStreet(user.street || '');
      },
      onError: () => setGetPersonalDetailsDataError(true)
    }
  );

  const [updateUserDetails, { loading: updateUserDetailsLoading }] = useMutation(UPDATE_USER_DETAILS, {
    variables: { input: { userId: loggedUserId, name, surname, phoneNumber, street, city, postalCode } },
    onError: () => setUpdateUserDetailsError(true),
    onCompleted: () => setUpdateUserDetailsSuccess(true)
  });

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
    } = handleMyDetailsValidation(name, surname, phoneNumber, city, postalCode, street);

    setNameValidationError(nameError);
    setSurnameValidationError(surnameError);
    setPhoneNumberValidationError(phoneNumberError);
    setCityValidationError(cityError);
    setPostalCodeValidationError(postalCodeError);
    setStreetValidationError(streetError);
    if (!validationStatus) return;

    updateUserDetails();
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
      <LoadingModal
        isOpen={updateUserDetailsLoading}
        info="Twoje dane są aktualizowane!"
      />
      <LoadingModal
        isOpen={personalDetailsDataLoading}
        info="Dane osobowe są pobierane!"
      />
      <SuccessModal
        isOpen={updateUserDetailsSuccess}
        handleOnClose={() => setUpdateUserDetailsSuccess(false)}
        info="Dane osobowe zostały zaktualizowane!"
      />
      <ErrorModal
        isOpen={updateUserDetailsError}
        handleOnClose={() => setUpdateUserDetailsError(false)}
        info="Niestety nie udało się zaktualizować danych osobowych!"
      />
      <ErrorModal
        isOpen={getPersonalDetailsDataError}
        handleOnClose={() => setGetPersonalDetailsDataError(false)}
        info="Niestety nie udało się pobrać danych osobowych!"
      />
    </div>
  );
};

export default MyDetails;
