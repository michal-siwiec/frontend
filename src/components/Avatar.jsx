import { exact, arrayOf, shape, bool, string } from 'prop-types';
import { isEmpty } from 'lodash';
import useFetchUrl from 'hooks/useFetchUrl.jsx';

const Avatar = ({ avatars, classNames }) => {
  let avatarURL = null;

  if (isEmpty(avatars)) {
    const defaultAvatarKey = 'images/empty-avatar.jpeg';
    avatarURL = useFetchUrl({ key: defaultAvatarKey });
  } else {
    const { bucket, key } = avatars.find(({ main }) => main);
    avatarURL = useFetchUrl({ bucket, key });
  }

  return (
    <img src={avatarURL} alt="avatar" className={classNames} />
  );
};

Avatar.propTypes = exact({
  avatars: arrayOf(
    shape({
      main: bool.isRequired,
      storagePath: string.isRequired
    })
  ),
  classNames: string
}).isRequired;

Avatar.defaultProps = {
  classNames: ''
};

export default Avatar;
