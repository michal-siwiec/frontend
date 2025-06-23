import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import NoAvatarsContent from './NoAvatarsContent.jsx';
import PresentAvatarsContent from './PresentAvatarsContent.jsx';

const Avatars = () => {
  const blockName = 'avatars';
  const { avatars } = useSelector((store) => store.user);

  return (
    <div className={blockName}>
      {
        isEmpty(avatars)
          ? <NoAvatarsContent />
          : <PresentAvatarsContent avatars={avatars} />
      }
    </div>
  );
};

export default Avatars;
