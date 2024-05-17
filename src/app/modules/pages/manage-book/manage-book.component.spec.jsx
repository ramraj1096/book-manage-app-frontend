import React from 'react';
import { render } from '@testing-library/react';
import ManageBookComponent from './ManageBookComponent';

describe('ManageBookComponent', () => {
  it('should render without crashing', () => {
    render(<ManageBookComponent />);
    // Test passes if no error is thrown during rendering
  });
});
