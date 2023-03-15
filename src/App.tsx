import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Main from './pages/Main/Main';
import Header from './pages/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
