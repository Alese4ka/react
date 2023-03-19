import React from 'react';
import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../router/AppRouter';
import Header from './Header';

describe('USERS TEST', () => {
  test('test main link', async () => {
    render(
      <MemoryRouter>
        <AppRouter />
        <Header />
      </MemoryRouter>
    );
    const mainLink = screen.getByTestId('main-link');
    userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
  test('test about link', async () => {
    render(
      <MemoryRouter>
        <AppRouter />
        <Header />
      </MemoryRouter>
    );
    const aboutLink = screen.getByTestId('about-link');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
});
