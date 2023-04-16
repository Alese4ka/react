import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { Provider } from 'react-redux';
import Card from './Card';
import { setupStore } from '../../store/store';

const store = setupStore();

describe('Card', () => {
  it('Render', () => {
    render(
      <Provider store={store}>
        <Card />
      </Provider>
    );
    const div = document.querySelector('div') as HTMLElement | null;
    const img = document.querySelector('img') as HTMLImageElement | null;

    expect(div).toBeTruthy();
    expect(img).toBeTruthy();

    expect(screen.findByTestId('cards'));
  });
});
