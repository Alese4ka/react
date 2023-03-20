import React from 'react';
import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { HeaderRouter } from './Header';

describe('USERS TEST', () => {
  test('test main link', async () => {
    render(
      <BrowserRouter>
        <HeaderRouter />
      </BrowserRouter>
    );
    const mainLink = screen.getByTestId('main-link');
    userEvent.click(mainLink);
    expect(screen.getByTestId('main')).toBeInTheDocument();
  });
  test('test about link', async () => {
    render(
      <BrowserRouter>
        <HeaderRouter />
      </BrowserRouter>
    );
    const aboutLink = screen.getByTestId('about-link');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
});
