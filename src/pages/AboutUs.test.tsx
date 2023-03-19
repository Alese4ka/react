import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HeaderRouter } from '../components/Header/Header';
import AboutUs from './AboutUs';

describe('About Us', () => {
  it('Renders About Us', () => {
    render(
      <BrowserRouter>
        <AboutUs />
        <HeaderRouter />
      </BrowserRouter>
    );

    const div = document.querySelector('div') as HTMLElement | null;

    expect(div).toBeTruthy();
  });
});
