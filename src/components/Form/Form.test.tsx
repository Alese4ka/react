/* eslint-disable react/jsx-no-bind */
import React from 'react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Card from '../Card/Card';
import Form from './Form';
import { setupStore } from '../../store/store';

const store = setupStore();

describe('FORM TEST', () => {
  it('renders form', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    window.URL.createObjectURL = vi.fn();

    const form = document.querySelector('form') as HTMLFormElement | null;
    expect(form).toBeTruthy();
    expect(form).toBeInTheDocument();

    const nameInput = document.querySelector('#name') as HTMLInputElement | null;
    expect(nameInput).toBeTruthy();
    expect(nameInput).toBeInTheDocument();
    expect(nameInput?.textContent).toBe('');

    if (nameInput) {
      nameInput.textContent = 'try to search';
      expect(nameInput.textContent).toBe('try to search');
      expect(nameInput.type).toBe('text');
      expect(nameInput.name).toBe('userName');

      fireEvent.change(nameInput, {
        target: {
          value: 'try to search',
        },
      });
      expect(nameInput.value).toBe('try to search');
    }

    const surnameInput = document.querySelector('#surname') as HTMLInputElement | null;
    expect(surnameInput).toBeTruthy();
    expect(surnameInput).toBeInTheDocument();
    expect(surnameInput?.textContent).toBe('');

    if (surnameInput) {
      surnameInput.textContent = 'try to search';
      expect(surnameInput.textContent).toBe('try to search');
      expect(surnameInput.type).toBe('text');
      expect(surnameInput.name).toBe('userSurname');

      fireEvent.change(surnameInput, {
        target: {
          value: 'try to search',
        },
      });
      expect(surnameInput.value).toBe('try to search');
    }

    const dateInput = document.querySelector('#date') as HTMLInputElement | null;
    expect(dateInput).toBeTruthy();
    expect(dateInput).toBeInTheDocument();
    expect(dateInput?.textContent).toBe('');

    const select = document.querySelector('#country') as HTMLInputElement | null;
    expect(select).toBeTruthy();
    expect(select).toBeInTheDocument();
    expect(select?.value).toBe('');

    if (select) {
      select.textContent = 'India';
      expect(select.textContent).toBe('India');
      expect(select.type).toBe('select-one');
      expect(select.name).toBe('userCountry');

      fireEvent.change(select, {
        target: {
          value: 'India',
        },
      });
      expect(select.value).toBe('');
    }

    const sexRadio = document.querySelector('#userSexF') as HTMLInputElement | null;
    expect(sexRadio).toBeTruthy();
    expect(sexRadio).toBeInTheDocument();
    expect(sexRadio?.value).toBe('Female');

    expect(sexRadio).not.toBeChecked();
    if (sexRadio) {
      fireEvent.click(sexRadio);
      expect(sexRadio).toBeChecked();
    }

    const sexRadioM = document.querySelector('#userSex') as HTMLInputElement | null;
    expect(sexRadioM).toBeTruthy();
    expect(sexRadioM).toBeInTheDocument();
    expect(sexRadioM?.value).toBe('Male');

    const fileInput = screen.getByTestId('file-input');
    expect(fileInput).toBeTruthy();
    expect(fileInput).toBeInTheDocument();

    const file = new File(['test image'], 'test.png', { type: 'image/png' });

    await waitFor(() => {
      userEvent.upload(fileInput, file);
      window.URL.createObjectURL(file);
    });

    const checkboxInput = screen.getByTestId('checkbox-input');
    expect(checkboxInput).toBeTruthy();
    expect(checkboxInput).toBeInTheDocument();

    expect(checkboxInput).not.toBeChecked();
    fireEvent.click(checkboxInput);
    expect(checkboxInput).toBeChecked();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    userEvent.click(button);

    expect(screen.getByTestId('name-error')).toBeInTheDocument();
    expect(screen.getByTestId('surname-error')).toBeInTheDocument();
    expect(screen.getByTestId('date-error')).toBeInTheDocument();
    expect(screen.getByTestId('country-error')).toBeInTheDocument();
    expect(screen.getByTestId('sex-error')).toBeInTheDocument();
    expect(screen.getByTestId('file-error')).toBeInTheDocument();
    expect(screen.getByTestId('checked-error')).toBeInTheDocument();
  });

  it('renders card', () => {
    render(
      <Provider store={store}>
        <Card users={[]} />
      </Provider>
    );
  });
});
