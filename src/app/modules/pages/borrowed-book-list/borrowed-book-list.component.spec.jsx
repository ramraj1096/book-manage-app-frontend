import React from 'react';
import { render } from '@testing-library/react';
import BorrowedBookListComponent from './BorrowedBookListComponent';

describe('BorrowedBookListComponent', () => {
  it('should render without crashing', () => {
    render(<BorrowedBookListComponent />);
    // Test passes if no error is thrown during rendering
  });
});
