import React from 'react';
import { render } from '@testing-library/react';
import BookDetailsComponent from './BookDetailsComponent';

describe('BookDetailsComponent', () => {
  it('should render without crashing', () => {
    render(<BookDetailsComponent />);
    // Test passes if no error is thrown during rendering
  });
});
