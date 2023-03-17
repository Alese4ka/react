import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import AboutUs from './AboutUs';

describe('About Us', () => {
  it('Renders About Us', () => {
    render(<AboutUs />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About Us');
  });
});
