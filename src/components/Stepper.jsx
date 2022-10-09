import React from 'react';
import {
  exact,
  func,
  number,
  arrayOf,
  string
} from 'prop-types';
import { Stepper as MuiStepper, Step, StepLabel } from '@mui/material';

const Stepper = ({ activeStep, handleStepOnClick, labels }) => (
  <MuiStepper activeStep={activeStep}>
    {
      labels.map((label, index) => (
        <Step>
          <StepLabel onClick={() => handleStepOnClick(index)}>
            {label}
          </StepLabel>
        </Step>
      ))
    }
  </MuiStepper>
);

Stepper.propTypes = exact({
  activeStep: number.isRequired,
  handleStepOnClick: func.isRequired,
  labels: arrayOf(string)
}).isRequired;

export default Stepper;
