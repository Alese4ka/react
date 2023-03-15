import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
  render(): ReactElement {
    return (
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<h2>Main Page</h2>} />
          <Route path="about" element={<h2>About Us</h2>} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </div>
    );
  }
}
