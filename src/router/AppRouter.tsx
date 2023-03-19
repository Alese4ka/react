import { Route, Routes } from 'react-router-dom';
import React, { ReactElement } from 'react';
import { AboutUsRouter } from '../pages/AboutUs';
import MainPage from '../pages/Main/Main';
import NotFound from '../pages/NotFound';

export default class AppRouter extends React.Component {
  render(): ReactElement {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" data-testid="about-link" element={<AboutUsRouter />} />
        <Route path="/*" data-testid="not-found-link" element={<NotFound />} />
      </Routes>
    );
  }
}
