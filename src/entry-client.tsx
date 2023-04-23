import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

import App from './App';

const store = setupStore();

hydrateRoot(
  document,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
