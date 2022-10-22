import React, {
  Fragment,
  useState,
  useRef
} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import useRedirect from 'hooks/useRedirect.jsx';
import AvatarsGenerator from 'services/avatarsGenerator.js';
import ValidationRegisterHandler from 'handlers/validationRegisterHandler.js';
import { REGISTER_USER } from 'graphql/mutations/user.js';
import FormContainer from 'components/containers/FormContainer.jsx';
import TextInput from 'components/inputs/TextInput.jsx';
import FileInput from 'components/inputs/FileInput.jsx';
import SubmitButton from 'components/SubmitButton.jsx';
import LoadingModal from 'components/modals/LoadingModal.jsx';
import UserRegisteredModal from 'components/modals/UserRegisteredModal.jsx';
import ErrorModal from 'components/modals/ErrorModal.jsx';

// I should transmit form with modifier insead add modifier to each element
//! Problem with showing error modal after login second time

const Register = () => {
  const blockName = 'register';
  const { loggedUserId } = useSelector((store) => store.user);
  const [avatars, setAvatars] = useState([]);
  const [email, setEmail] = useState('siwiec.michal724@gmail.com');
  const [password, setPassword] = useState('Ab47901825');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [avatarsErrorMessages, setAvatarsErrorMessages] = useState('');
  const [registerUserError, setRegisterUserError] = useState('');
  const fileInput = useRef(null);
  const [registerUser, {
    data: registerUserData,
    loading: registerUserLoading
  }] = useMutation(REGISTER_USER, { onError: setRegisterUserError });

  const clearForm = () => {
    setAvatars([]);
    setEmail('');
    setPassword('');
    fileInput.current.value = '';
  };

  const handleEmailOnChange = ({ target: { value } }) => setEmail(value);
  const handlePasswordOnChange = ({ target: { value } }) => setPassword(value);

  const handleFileOnChange = async ({ target: { files } }) => {
    const generatedAvatars = await new AvatarsGenerator(files).call();

    setAvatars(generatedAvatars);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      emailError,
      passwordError,
      avatarError,
      validationStatus
    } = new ValidationRegisterHandler({ email, password, avatars }).call();

    setEmailErrorMessage(emailError);
    setPasswordErrorMessage(passwordError);
    setAvatarsErrorMessages(avatarError);
    if (!validationStatus) return;

    registerUser({ variables: { input: { email, password, avatars } } });
    clearForm();
  };

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
            />
            <TextInput
              placeholder="Password"
              type="password"
              classNames="text-input--register"
              onChange={handlePasswordOnChange}
              value={password}
              validationError={passwordErrorMessage}
            />
            <FileInput
              classNames="file-input--register"
              onChange={handleFileOnChange}
              innerRef={fileInput}
              validationError={avatarsErrorMessages}
            />
            <SubmitButton
              classNames="button--register"
              onMouseDown={handleSubmit}
              value="Załóż konto"
            />
          </Fragment>
        )}
      />
      {!!registerUserData && <UserRegisteredModal />}
      {!!registerUserLoading && <LoadingModal info="Rejestrujemy użytkownika!" />}
      { registerUserError && <ErrorModal info="Niestety nie udało się zarejestrować nowego konta." /> }
    </div>
  );
};

export default Register;
