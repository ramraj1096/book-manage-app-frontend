import React from 'react';
import { render } from '@testing-library/react';
import MyBooksComponent from './MyBooksComponent';

describe('MyBooksComponent', () => {
  it('should render without crashing', () => {
    render(<MyBooksComponent />);
    // Test passes if no error is thrown during rendering
  });
});
