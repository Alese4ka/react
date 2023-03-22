import { WithRouterProps } from 'entities/main.interface';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../../helpers/HOC';
import './Header.css';

export default class Header extends React.Component<WithRouterProps> {
  render(): ReactElement {
    const { title } = this.props;
    return (
      <div className="wrapper">
        <h2>{title}</h2>
        <div className="wrapper-menu">
          <Link to="/" data-testid="main-link">
            <p data-testid="main" className="menu">
              Main Page
            </p>
          </Link>
          <Link to="/about" data-testid="about-link">
            <p data-testid="about-page" className="menu">
              About Us
            </p>
          </Link>
          <Link to="/form" data-testid="form-link">
            <p data-testid="form-page" className="menu">
              Form
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export const HeaderRouter = withRouter(Header);
