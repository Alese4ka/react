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
              <>
                <h2>Main Page</h2>
                <Link to="/about">
                  <p className="menu">About Us</p>
                </Link>
              </>
            }
          />
          <Route
            path="about"
            element={
              <>
                <h2>About Us</h2>
                <Link to="/">
                  <p className="menu">Main Page</p>
                </Link>
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <h2>Not Found</h2>
                <Link to="/">
                  <p className="menu">Main Page</p>
                </Link>
              </>
            }
          />
        </Routes>
      </div>
    );
  }
}
