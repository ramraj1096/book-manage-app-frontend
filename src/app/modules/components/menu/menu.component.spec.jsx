import React from 'react';
import { render } from '@testing-library/react';
import MenuComponent from './MenuComponent';

describe('MenuComponent', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<MenuComponent />);
    const linkElement = getByText(/Menu Component/i);
    expect(linkElement).toBeInTheDocument();
  });
});
