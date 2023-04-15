import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import AppRouter from './router/AppRouter';

const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />;
    </Provider>
  );
};

export default App;
