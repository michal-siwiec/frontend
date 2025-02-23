import React, { useContext } from 'react';
import { OrderContext } from 'contexts/contexts.js';
import Stepper from 'components/Stepper.jsx';
import { STEP_LABELS } from 'data/uiElements.js';

const Header = () => {
  const { step, setStep } = useContext(OrderContext);

  const handleStepOnClick = (stepIndex) => {
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
