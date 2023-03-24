import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import Card from './Card';

describe('Card', () => {
  it('Render', () => {
    render(<Card />);
    const div = document.querySelector('div') as HTMLElement | null;
    const img = document.querySelector('img') as HTMLImageElement | null;

    expect(div).toBeTruthy();
    expect(img).toBeTruthy();

    expect(screen.findByTestId('cards'));
    expect(screen.findByTestId('card'));
  });
});
