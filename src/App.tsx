import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
