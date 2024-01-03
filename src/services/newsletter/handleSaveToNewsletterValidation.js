import validateByRegexp from 'services/validations/validateByRegexp.js';
import formRegepx from 'data/formRegexp.js';
import validationErrors from 'data/validationErrors.js';

const handleSaveToNewsletterValidation = ({ name, surname, email }) => {
  const isNameValid = validateByRegexp({ regexp: formRegepx.name, subject: name });
  const isSurnameValid = validateByRegexp({ regexp: formRegepx.surname, subject: surname });
  const isEmailValid = validateByRegexp({ regexp: formRegepx.email, subject: email });

  return {
    nameError: !isNameValid && validationErrors.name,
    surnameError: !isSurnameValid && validationErrors.surname,
    emailError: !isEmailValid && validationErrors.email,
    validationStatus: isNameValid && isSurnameValid && isEmailValid
  };
};

export default handleSaveToNewsletterValidation;
