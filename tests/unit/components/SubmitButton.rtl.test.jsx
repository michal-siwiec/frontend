import { render, screen, fireEvent } from '@testing-library/react';
import SubmitButton from 'components/SubmitButton.tsx';

describe('SubmitButton Component', () => {
  it('renders without crashing', () => {
    render(<SubmitButton value="Submit" />);

    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('displays the correct value', () => {
    render(<SubmitButton value="Click Me" />);

    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onMouseDown when clicked', () => {
    const onMouseDownMock = jest.fn();
    render(<SubmitButton value="Click Me" onMouseDown={onMouseDownMock} />);
    fireEvent.mouseDown(screen.getByText('Click Me'));

    expect(onMouseDownMock).toHaveBeenCalledTimes(1);
  });
});
