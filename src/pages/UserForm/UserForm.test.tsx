import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserForm from './UserForm';

describe('FORM TEST', () => {
  test('test UserForm', () => {
    render(
      <BrowserRouter>
        <UserForm />
      </BrowserRouter>
    );

    const div = document.querySelector('div') as HTMLElement | null;
    expect(div).toBeTruthy();
  });
});
