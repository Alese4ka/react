import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import UserForm from './UserForm';
import { setupStore } from '../../store/store';

const store = setupStore();

describe('FORM TEST', () => {
  test('test UserForm', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UserForm />
        </Provider>
      </BrowserRouter>
    );

    const div = document.querySelector('div') as HTMLElement | null;
    expect(div).toBeTruthy();
  });
});
