import React, { Fragment, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import useRedirect from 'hooks/useRedirect.jsx';
import { login } from 'redux_/user/actionsCreator.ts';
import { handleRegisterValidation, generateAvatars } from 'services/user.ts';
import { REGISTER_USER } from 'graphql/mutations/user.ts';
import FormContainer from 'components/containers/FormContainer.jsx';
import TextInput from 'components/inputs/TextInput.jsx';
import FileInput from 'components/inputs/FileInput.jsx';
import SubmitButton from 'components/SubmitButton.jsx';
import LoadingModal from 'components/modals/LoadingModal.jsx';
import ErrorModal from 'components/modals/ErrorModal.jsx';
import { ERROR_CODES } from 'data/errors.ts';

const Register = () => {
  const blockName = 'register';
  const dispatch = useDispatch();
  const fileInput = useRef(null);
  const { loggedUserId } = useSelector((store) => store.user);
  const [avatars, setAvatars] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [avatarsErrorMessages, setAvatarsErrorMessages] = useState('');
  const [registerUserError, setRegisterUserError] = useState(false);
  const [registerUserErrorMesage, setRegisterUserErrorMesage] = useState('');

  const [registerUser, { loading, data, error }] = useMutation(REGISTER_USER, {
    onError: () => {
      if (error.networkError?.statusCode === 500) {
        setRegisterUserErrorMesage('Niestety nie udało się zarejestrować nowego konta.');
      } else {
        const { extensions: { error_code: errorCode } } = error.graphQLErrors[0];

        if (errorCode === ERROR_CODES.EMAIL_ALREADY_TAKEN) {
          setRegisterUserErrorMesage('Adres email jest już zajęty!');
        } else {
          setRegisterUserErrorMesage('Niestety nie udało się zarejestrować nowego konta.');
        }
      }

      setRegisterUserError(true);
    },
    onCompleted: () => {
      clearForm();
      loginUser();
    }
  });

  const handleEmailOnChange = ({ target: { value } }) => setEmail(value);
  const handlePasswordOnChange = ({ target: { value } }) => setPassword(value);

  const handleFileOnChange = async ({ target: { files } }) => {
    const generatedAvatars = await generateAvatars(files);

    setAvatars(generatedAvatars);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      emailError,
      passwordError,
      avatarError,
      validationStatus
    } = handleRegisterValidation(email, password, avatars);

    setEmailErrorMessage(emailError);
    setPasswordErrorMessage(passwordError);
    setAvatarsErrorMessages(avatarError);
    if (!validationStatus) return;

    registerUser({ variables: { input: { email, password, avatars } } });
  };

  const clearForm = () => {
    setAvatars([]);
    setEmail('');
    setPassword('');
    fileInput.current.value = '';
  };

  const loginUser = () => dispatch(login(data));

  useRedirect({ path: '/', shouldRedirect: !!loggedUserId });

  return (
    <div className={blockName}>
      <FormContainer
        header={(
          <Fragment>
            <Link to="/login">Logowanie</Link>
            <Link to="/register">
              <span className={`${blockName}__active-link`}> Rejestracja</span>
            </Link>
          </Fragment>
        )}
        form={(
          <Fragment>
            <TextInput
              placeholder="Email"
              classNames="text-input--register"
              onChange={handleEmailOnChange}
              value={email}
              validationError={emailErrorMessage}
              type="email"
              dataTestId="register-email-input"
            />
            <TextInput
              placeholder="Password"
              type="password"
              classNames="text-input--register"
              onChange={handlePasswordOnChange}
              value={password}
              validationError={passwordErrorMessage}
              dataTestId="register-password-input"
            />
            <FileInput
              classNames="file-input--register"
              onChange={handleFileOnChange}
              innerRef={fileInput}
              validationError={avatarsErrorMessages}
              dataTestID="register-file-input"
            />
            <SubmitButton
              classNames="button--register"
              onMouseDown={handleSubmit}
              value="Załóż konto"
              dataTestId="register-submit-button"
            />
          </Fragment>
        )}
      />
      <LoadingModal
        isOpen={loading}
        info="Rejestrujemy użytkownika!"
      />
      <ErrorModal
        isOpen={registerUserError}
        handleOnClose={() => setRegisterUserError(false)}
        info={registerUserErrorMesage}
      />
    </div>
  );
};

export default Register;
