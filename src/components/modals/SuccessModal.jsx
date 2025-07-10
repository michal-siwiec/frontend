import { exact, string, bool, func } from 'prop-types';
import { Modal } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SuccessModal = ({ isOpen, handleOnClose, info, children }) => {
  const blockName = 'modal';

  return (
    <Modal
      open={isOpen}
      onClose={handleOnClose}
      className={`${blockName} ${blockName}--success`}
    >
      <div className={`${blockName}__content-wrapper`}>
        <CheckCircleIcon className={`${blockName}__success-icon`} />
        <h2 className={`${blockName}__header`}>Dziękujemy!</h2>
        <div className={`${blockName}__info`}>
          <p>{info}</p>
        </div>
        {children}
      </div>
    </Modal>
  );
};

SuccessModal.propTypes = exact({
  isOpen: bool.isRequired,
  handleOnClose: func.isRequired,
  info: string
}).isRequired;

export default SuccessModal;
