import React from 'react';
import { render } from '@testing-library/react';
import ReturnedBooksComponent from './ReturnedBooksComponent';

describe('ReturnedBooksComponent', () => {
  it('should render without crashing', () => {
    render(<ReturnedBooksComponent />);
    // Test passes if no error is thrown during rendering
  });
});
