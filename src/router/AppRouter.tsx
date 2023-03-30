import { Route, Routes } from 'react-router-dom';
import React, { ReactElement } from 'react';
import { AboutUsRouter } from '../pages/AboutUs';
import MainPage from '../pages/Main/Main';
import NotFound from '../pages/NotFound';
import { UserFormRouter } from '../pages/UserForm/UserForm';

export default class AppRouter extends React.Component {
  render(): ReactElement {
    return (
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<AboutUsRouter />} />
        <Route path="/form" element={<UserFormRouter />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    );
  }
}
