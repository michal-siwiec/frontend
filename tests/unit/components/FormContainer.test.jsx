import { screen } from '@testing-library/react';
import renderWithProviders from '../helpers/render_with_providers.jsx';
import FormContainer from 'components/containers/FormContainer.jsx';

test('Renders FormContainer with success', () => {
  renderWithProviders(
    <FormContainer
      header='Zapisz się na newsletter aby być na bieżąco!'
      form={<form></form>}
    />
  );

  expect(screen.getByText("Zapisz się na newsletter aby być na bieżąco!"));
});
