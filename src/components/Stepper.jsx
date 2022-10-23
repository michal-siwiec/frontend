import React from 'react';
import { exact, func, number, arrayOf, string } from 'prop-types';
import { Stepper as MuiStepper, Step, StepLabel } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const Stepper = ({ activeStep, handleStepOnClick, labels }) => {
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

Stepper.propTypes = exact({
  activeStep: number.isRequired,
  handleStepOnClick: func.isRequired,
  labels: arrayOf(string)
}).isRequired;

export default Stepper;
