import { Route, Routes } from 'react-router-dom';
import React, { ReactElement } from 'react';
import AboutUs from '../pages/AboutUs';
import MainPage from '../pages/MainPage/MainPage';
import NotFound from '../pages/NotFound';
import UserForm from '../pages/UserForm/UserForm';

export default class AppRouter extends React.Component {
  render(): ReactElement {
    return (
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    );
  }
}
