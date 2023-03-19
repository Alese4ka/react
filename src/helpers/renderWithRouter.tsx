import React, { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from 'router/AppRouter';

const renderWithRouter = (component: ReactNode, initialRoute = '/') => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};

export default renderWithRouter;
