import { render, screen, within } from '@testing-library/react';
import MobileMenagers from 'pages/about/MobileMenagers.jsx';

describe('MobileMenagers', () => {
  it('renders proper content', () => {
    render(<MobileMenagers />);

    const container = screen.getByTestId('mobile-menagers-container');
    const manager1Container = within(container).getByTestId('mobile-menagers-manager-top-left');
    const manager2Container = within(container).getByTestId('mobile-menagers-manager-top-right');
    const manager3Container = within(container).getByTestId('mobile-menagers-manager-bottom-right');
    const manager4Container = within(container).getByTestId('mobile-menagers-manager-bottom-left');

    expect(manager1Container).toBeInTheDocument();
    expect(within(manager1Container).getByText('Małgorzata Lewandowska')).toBeInTheDocument();
    expect(within(manager1Container).getByText(/Lorem ipsum, dolor sit/i)).toBeInTheDocument();
    expect(within(manager1Container).getByText('Prezes zarządu')).toBeInTheDocument();

    expect(manager2Container).toBeInTheDocument();
    expect(within(manager2Container).getByText('Łukasz Nowak')).toBeInTheDocument();
    expect(within(manager2Container).getByText(/Lorem ipsum, dolor sit/i)).toBeInTheDocument();
    expect(within(manager2Container).getByText('Dyrektor ds. wzrostu')).toBeInTheDocument();

    expect(manager3Container).toBeInTheDocument();
    expect(within(manager3Container).getByText('Aleksander Winny')).toBeInTheDocument();
    expect(within(manager3Container).getByText(/Lorem ipsum, dolor sit/i)).toBeInTheDocument();
    expect(within(manager3Container).getByText('Menager magazynu')).toBeInTheDocument();

    expect(manager4Container).toBeInTheDocument();
    expect(within(manager4Container).getByText('Paweł Niegodziwy')).toBeInTheDocument();
    expect(within(manager4Container).getByText(/Lorem ipsum, dolor sit/i)).toBeInTheDocument();
    expect(within(manager4Container).getByText('Starszy sprzedawca')).toBeInTheDocument();
  });
});
