import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('TEST APP', () => {
  test('Router test', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const mainLink = screen.getByTestId('main-link');
    userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();

    const aboutLink = screen.getByTestId('about-link');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();

    const formLink = screen.getByTestId('form-link');
    userEvent.click(formLink);
    expect(screen.getByTestId('form-page')).toBeInTheDocument();
  });

  test('Error page test', () => {
    render(
      <MemoryRouter initialEntries={['/asfasfafasf']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
