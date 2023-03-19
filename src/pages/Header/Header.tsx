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
          <Link to="/">
            <p data-testid="main-page" className="menu">
              Main Page
            </p>
          </Link>
          <Link to="/about">
            <p data-testid="about-page" className="menu">
              About Us
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export const HeaderRouter = withRouter(Header);
