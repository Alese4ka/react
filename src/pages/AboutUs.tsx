/* eslint-disable import/no-named-as-default */
import { WithRouterProps } from 'entities/main.interface';
import React, { ReactElement } from 'react';
import withRouter from '../helpers/HOC';
import HeaderRouter from '../components/Header/Header';

export default class AboutUs extends React.Component<WithRouterProps> {
  render(): ReactElement {
    const { location } = this.props;
    if (location) {
      const nameUrl = location.pathname.slice(1);
      return (
        <div data-testid="about-link">
          <HeaderRouter title={nameUrl} />
          <h1>About Us</h1>
        </div>
      );
    }
    return (
      <div data-testid="about-link">
        <HeaderRouter title="Not Found" />
        <h1>Not Found</h1>
      </div>
    );
  }
}

export const AboutUsRouter = withRouter(AboutUs);
