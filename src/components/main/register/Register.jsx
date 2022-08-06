import React, {
  Fragment,
  useState,
  useRef,
  useEffect
} from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { REGISTER_USER } from '../../../graphql/mutations/user.js';
import AvatarsGenerator from '../../../services/AvatarsGenerator.js';
import ValidationRegisterFormHandler from '../../../validators/validationRegisterFormHandler.js';
import FormContainer from '../../reusable/containers/FormContainer.jsx';
import TextInput from '../../reusable/inputs/TextInput.jsx';
import FileInput from '../../reusable/inputs/FileInput.jsx';
import SubmitButton from '../../reusable/buttons/SubmitButton.jsx';
import LoadingModal from '../../reusable/modals/loadingModal.jsx';
import UserRegisteredModal from '../../reusable/modals/userRegisteredModal.jsx';

// I should transmit form with modifier insead add modifier to each element

const Register = () => {
  const blockName = 'register';
  const [avatars, setAvatars] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [avatarsErrorMessages, setAvatarsErrorMessages] = useState('');
  const [userRegisterWithSuccess, setUserRegisterWithSuccess] = useState(false);
  const fileInput = useRef(null);
  const [registerUser, { data, loading }] = useMutation(REGISTER_USER);

  const handleEmailOnChange = (e) => setEmail(e.target.value);
  const handlePasswordOnChange = (e) => setPassword(e.target.value);

  const handleFileOnChange = async (e) => {
    const files = [...e.target.files];
    const generatedAvatars = await new AvatarsGenerator(files).call();

    setAvatars(generatedAvatars);
  };

  const clearForm = () => {
    setAvatars([]);
    setEmail('');
    setPassword('');
    fileInput.current.value = '';
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

  const userRegisteredWithSuccess = data?.user?.id;

  useEffect(() => {
    if (userRegisteredWithSuccess) setUserRegisterWithSuccess(true);
  }, [userRegisteredWithSuccess]);

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
              classNames="text-input--register"
              onChange={handlePasswordOnChange}
              value={password}
              validationError={passwordErrorMessage}
            />
            <FileInput
              classNames="file-input--register"
              onChange={handleFileOnChange}
              ref={fileInput}
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
    </div>
  );
};

export default Register;
