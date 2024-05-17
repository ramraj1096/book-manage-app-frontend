import React from 'react';
import { render } from '@testing-library/react';
import RatingComponent from './RatingComponent';

describe('RatingComponent', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<RatingComponent />);
    const ratingComponent = getByTestId('rating-component');
    expect(ratingComponent).toBeInTheDocument();
  });
});
