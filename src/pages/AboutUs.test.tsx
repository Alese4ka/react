import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import AboutUs from './AboutUs';

describe('About Us', () => {
  it('Renders About Us', () => {
    render(
      <BrowserRouter>
        <AboutUs />
        <Header />
      </BrowserRouter>
    );

    const div = document.querySelector('div') as HTMLElement | null;

    expect(div).toBeTruthy();
  });
});
