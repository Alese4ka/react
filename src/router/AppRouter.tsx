import { Route, Routes } from 'react-router-dom';
import React, { ReactElement } from 'react';
import { AboutUsRouter } from '../pages/AboutUs';
import MainPage from '../pages/Main/Main';
import NotFound from '../pages/NotFound';
import Form from '../pages/Form/Form';

export default class AppRouter extends React.Component {
  render(): ReactElement {
    return (
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<AboutUsRouter />} />
        <Route path="/form" element={<Form />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    );
  }
}
