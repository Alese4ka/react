/* eslint-disable react/jsx-no-bind */
import React from 'react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('FORM TEST', () => {
  it('renders card', () => {
    const register = vi.fn();
    render(<Form register={register} />);

    const nameInput = document.querySelector('#name') as HTMLInputElement | null;
    expect(nameInput).toBeTruthy();
    expect(nameInput?.textContent).toBe('');

    const surnameInput = document.querySelector('#surname') as HTMLInputElement | null;
    expect(surnameInput).toBeTruthy();
    expect(surnameInput?.textContent).toBe('');

    const dateInput = document.querySelector('#date') as HTMLInputElement | null;
    expect(dateInput).toBeTruthy();
    expect(dateInput?.textContent).toBe('');

    const select = document.querySelector('#country') as HTMLInputElement | null;
    expect(select).toBeTruthy();
    expect(select?.value).toBe('defaultValue');

    const sexRadio = document.querySelector('#switch_left') as HTMLInputElement | null;
    expect(sexRadio).toBeTruthy();
    expect(sexRadio?.value).toBe('Female');

    const fileInput = screen.getByTestId('file-input');
    expect(fileInput).toBeTruthy();

    const checkboxInput = screen.getByTestId('checkbox-input');
    expect(checkboxInput).toBeTruthy();

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(screen.getByTestId('name-error')).toBeInTheDocument();
    expect(screen.getByTestId('surname-error')).toBeInTheDocument();
    expect(screen.getByTestId('date-error')).toBeInTheDocument();
    expect(screen.getByTestId('country-error')).toBeInTheDocument();
    expect(screen.getByTestId('sex-error')).toBeInTheDocument();
    expect(screen.getByTestId('file-error')).toBeInTheDocument();
    expect(screen.getByTestId('checked-error')).toBeInTheDocument();
  });
});
