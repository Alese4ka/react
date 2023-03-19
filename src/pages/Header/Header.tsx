import React, { ReactElement } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
  render(): ReactElement {
    return (
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Main Page</h2>
                <Link to="/about">
                  <p className="menu">About Us</p>
                </Link>
              </div>
            }
          />
          <Route
            path="about"
            element={
              <div>
                <h2>About Us</h2>
                <Link to="/">
                  <p className="menu">Main Page</p>
                </Link>
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div>
                <h2>Not Found</h2>
                <Link to="/">
                  <p className="menu">Main Page</p>
                </Link>
              </div>
            }
          />
        </Routes>
      </div>
    );
  }
}
