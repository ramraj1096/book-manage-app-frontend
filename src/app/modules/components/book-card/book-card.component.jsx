import React from 'react';
import { render } from '@testing-library/react';
import BookCardComponent from './BookCardComponent';

describe('BookCardComponent', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<BookCardComponent />);
    const linkElement = getByText(/Book Card Component/i);
    expect(linkElement).toBeInTheDocument();
  });
});
