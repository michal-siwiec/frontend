import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Stepper from 'components/Stepper.jsx';

describe('Stepper Component', () => {
  const labels = ['Step 1', 'Step 2', 'Step 3'];

  it('renders the stepper with given labels', () => {
    render(<Stepper activeStep={0} handleStepOnClick={jest.fn()} labels={labels} />);

    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('highlights the active step', () => {
    render(<Stepper activeStep={1} handleStepOnClick={jest.fn()} labels={labels} />);

    const activeStep = screen.getByText('Step 2');

    expect(activeStep).toBeInTheDocument();
    expect(activeStep).toHaveClass('Mui-active');
  });

  it('calls handleStepOnClick when a step is clicked', async () => {
    const handleStepOnClick = jest.fn();
    render(<Stepper activeStep={0} handleStepOnClick={handleStepOnClick} labels={labels} />);

    const step2 = screen.getByText('Step 2');
    await userEvent.click(step2);

    expect(handleStepOnClick).toHaveBeenCalledTimes(1);
    expect(handleStepOnClick).toHaveBeenCalledWith(1);
  });
});
