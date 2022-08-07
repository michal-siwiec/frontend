import React, {
  Fragment,
  useState,
  useRef
} from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import FormContainer from '../../reusable/containers/FormContainer.jsx';
import TextInput from '../../reusable/inputs/TextInput.jsx';
import FileInput from '../../reusable/inputs/FileInput.jsx';
import SubmitButton from '../../reusable/buttons/SubmitButton.jsx';
import LoadingModal from '../../reusable/modals/loadingModal.jsx';
import UserRegisteredModal from '../../reusable/modals/userRegisteredModal.jsx';
import RegisterUserErrorModal from '../../reusable/modals/registerUserErrorModal.jsx';
import AvatarsGenerator from '../../../services/AvatarsGenerator.js';
import ValidationRegisterFormHandler from '../../../validators/validationRegisterFormHandler.js';
import { REGISTER_USER } from '../../../graphql/mutations/user.js';

// I should transmit form with modifier insead add modifier to each element
//! Problem with showing error modal after login second time

const Register = () => {
  const blockName = 'register';
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
    } = new ValidationRegisterFormHandler({ email, password, avatars }).call();

    setEmailErrorMessage(emailError);
    setPasswordErrorMessage(passwordError);
    setAvatarsErrorMessages(avatarError);
    if (!validationStatus) return;

    registerUser({ variables: { input: { email, password, avatars } } });
    clearForm();
  };

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
      {!!registerUserLoading && <LoadingModal info="Rejestrujemy użytkownika! Proszę czekać..." />}
      {!!registerUserError && <RegisterUserErrorModal />}
    </div>
  );
};

export default Register;
