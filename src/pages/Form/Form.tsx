/* eslint-disable import/no-named-as-default */
import React, { ReactElement } from 'react';
import { WithRouterProps } from 'entities/main.interface';
import HeaderRouter from '../../components/Header/Header';
import UserForm from './UserForm/UserForm';

export default class Form extends React.Component<WithRouterProps> {
  render(): ReactElement {
    const { location } = this.props;
    if (location) {
      const nameUrl = location.pathname.slice(1);
      return (
        <div>
          <div data-testid="form-link">
            <HeaderRouter title={nameUrl} />
          </div>
          <UserForm />
        </div>
      );
    }
    return (
      <div>
        <div data-testid="form-link">
          <HeaderRouter title="form" />
        </div>
        <UserForm />
      </div>
    );
  }
}
