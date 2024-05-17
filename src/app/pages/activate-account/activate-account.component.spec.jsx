// ActivateAccountComponent.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ActivateAccountComponent from './ActivateAccountComponent';

describe('ActivateAccountComponent', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<ActivateAccountComponent />);
    const activateAccountComponent = getByTestId('activate-account-component');
    expect(activateAccountComponent).toBeInTheDocument();
  });
});
