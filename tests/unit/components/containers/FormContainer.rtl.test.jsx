import { render, screen } from '@testing-library/react';
import FormContainer from 'components/containers/FormContainer.jsx';

describe('FormContainer', () => {
  it('renders component properly', () => {
    render(
      <FormContainer
        header="Test Header"
        form={<form><input placeholder="Test Input" /></form>}
      />
    );

    expect(screen.getByText('Test Header')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Test Input')).toBeInTheDocument();
  });
});
