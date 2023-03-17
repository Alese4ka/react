import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import NotFound from './NotFound';

describe('About Us', () => {
  it('Renders About Us', () => {
    render(<NotFound />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});
