import { describe } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import React from 'react';
import Main from './Main';

describe('Main', () => {
  test('The input field and its props', () => {
    render(<Main props="" />);
    const form = document.querySelector('form') as HTMLFormElement | null;
    const input = document.querySelector('input') as HTMLInputElement | null;

    expect(form).toBeTruthy();
    expect(input).toBeTruthy();

    expect(input?.textContent).toBe('');

    if (input) {
      input.textContent = 'try to search';
      expect(input.textContent).toBe('try to search');

      expect(input.type).toBe('search');

      expect(input.name).toBe('search');

      fireEvent.change(input, {
        target: {
          value: 'try to search',
        },
      });
      expect(input.value).toBe('try to search');
    }
  });
});
