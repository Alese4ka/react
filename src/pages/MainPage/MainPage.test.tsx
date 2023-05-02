import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import MainPage from './MainPage';
import { setupStore } from '../../store/store';

const store = setupStore();

describe('get characters', () => {
  it('checks if returned data from API rendered into component', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <MainPage />
        </Provider>
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText('Type here...') as HTMLInputElement;

    fireEvent.change(input, {
      target: { value: 'rick' },
    });

    fireEvent.submit(input);

    expect(input.value).toBe('rick');
  });

  it('checks if open modal after click', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <MainPage />
        </Provider>
      </MemoryRouter>
    );

    const card = await screen.findByTestId('card-modal');

    userEvent.click(card);

    expect(screen.findByText('Rick Sanchez'));
  });
});
