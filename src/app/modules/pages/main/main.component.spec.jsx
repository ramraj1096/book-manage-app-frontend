import React from 'react';
import { render } from '@testing-library/react';
import MainComponent from './MainComponent';

describe('MainComponent', () => {
  it('should render without crashing', () => {
    render(<MainComponent />);
    // Test passes if no error is thrown during rendering
  });
});
