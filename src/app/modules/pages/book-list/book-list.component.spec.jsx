import React from 'react';
import { render } from '@testing-library/react';
import BookListComponent from './BookListComponent';

describe('BookListComponent', () => {
  it('should render without crashing', () => {
    render(<BookListComponent />);
    // Test passes if no error is thrown during rendering
  });
});
