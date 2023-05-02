import { HeaderType } from 'entities/main.interface';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props: HeaderType) => {
  const { title } = props;
  return (
    <div className="wrapper">
      <h2>{title}</h2>
      <div className="wrapper-menu">
        <Link to="/" data-testid="main-link" className="main">
          <p data-testid="main" className="menu">
            Main Page
          </p>
        </Link>
        <Link to="/about" data-testid="about-link" className="about">
          <p data-testid="about-page" className="menu">
            About Us
          </p>
        </Link>
        <Link to="/form" data-testid="form-link" className="form">
          <p data-testid="form-page" className="menu">
            Form
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
