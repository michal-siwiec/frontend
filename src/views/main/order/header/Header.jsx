import React, { useContext } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import { OrderContext } from 'contexts/contexts.js';
import { stepsLabel } from './data.js';

const Header = () => {
  const { step, setStep } = useContext(OrderContext);

  const handleStepOnClick = (stepIndex) => {
    if (step > stepIndex) setStep(stepIndex);
  };

  return (
    <div>
      <Stepper activeStep={step}>
        {
          stepsLabel.map((stepLabel, index) => (
            <Step>
              <StepLabel onClick={() => handleStepOnClick(index)}>
                {stepLabel}
              </StepLabel>
            </Step>
          ))
        }
      </Stepper>
    </div>
  );
};

export default Header;
