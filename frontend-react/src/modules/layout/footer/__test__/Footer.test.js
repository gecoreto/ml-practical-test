import { render } from '@testing-library/react';
import { Footer } from '../Footer';

test('renders Footer', () => {
    const { getByText } = render(
        <Footer />
    );
    expect(getByText(/Mi footer/i)).toBeInTheDocument();
});