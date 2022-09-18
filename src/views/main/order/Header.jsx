import React, { useContext } from 'react';
import { OrderContext } from 'contexts/contexts.js';
import { Stepper, Step, StepLabel } from '@mui/material';

const Header = () => {
  const stepsLabel = ['Dane odbiorcy', 'Sposób dostawy', 'Metoda płatności', 'Podsumowanie'];
  const { step, setStep } = useContext(OrderContext);

  return (
    <div>
      <Stepper activeStep={step}>
        {
          stepsLabel.map((stepLabel, index) => (
            <Step>
              <StepLabel onClick={() => setStep(index)}>
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
