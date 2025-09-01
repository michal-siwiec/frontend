import React, { useContext } from 'react';
import { OrderContext } from 'contexts/contexts';
import Stepper from 'components/Stepper';
  import { STEP_LABELS } from 'data/uiElements';

const Header = () => {
  const { step, setStep } = useContext(OrderContext);

  const handleStepOnClick = (stepIndex: number) => {
    if (step > stepIndex) setStep(stepIndex);
  };

  return (
    <Stepper
      activeStep={step}
      handleStepOnClick={handleStepOnClick}
      labels={STEP_LABELS}
    />
  );
};

export default Header;
