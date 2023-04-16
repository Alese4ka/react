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

    const input = await screen.findByTestId('search');

    fireEvent.change(input, {
      target: { value: 'rick' },
    });

    fireEvent.submit(input);

    expect(await screen.findAllByText(/rick/i));
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

    expect(await screen.findByText('Rick Sanchez'));
  });
});
