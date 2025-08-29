import { exact, bool, string } from 'prop-types';
import { Modal, CircularProgress } from '@mui/material';
import VawyDots from 'components/VawyDots.tsx';

const LoadingModal = ({ isOpen, info }) => {
  const blockName = 'modal';

  return (
    <Modal
      open={isOpen}
      className={`${blockName} ${blockName}--loading`}
    >
      <div className={`${blockName}__content-wrapper`}>
        <CircularProgress disableShrink className={`${blockName}__loader`} />
        <h2 className={`${blockName}__header`}>
          Prosimy o chwilę cierpliwości
          <VawyDots dotsCount={4} />
        </h2>
        <div className={`${blockName}__info`}>
          <p>{info}</p>
        </div>
      </div>
    </Modal>
  );
};

LoadingModal.propTypes = exact({
  isOpen: bool.isRequired,
  info: string.isRequired
}).isRequired;

export default LoadingModal;
