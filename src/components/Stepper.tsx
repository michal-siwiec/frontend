import React from 'react';
import { Stepper as MuiStepper, Step, StepLabel } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

type StepperType = {
  activeStep: number,
  labels: Array<string>,
  handleStepOnClick: (index: number) => void
};

const Stepper = ({ activeStep, handleStepOnClick, labels }: StepperType) => {
  const blockName = 'stepper';

  return (
    <MuiStepper className={blockName} activeStep={activeStep}>
      {
        labels.map((label, index) => (
          <Step key={uuidv4()}>
            <StepLabel onClick={() => handleStepOnClick(index)}>
              {label}
            </StepLabel>
          </Step>
        ))
      }
    </MuiStepper>
  );
};

export default Stepper;
