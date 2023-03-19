/* eslint-disable import/no-named-as-default */
import React, { ReactElement } from 'react';
import HeaderRouter from '../components/Header/Header';

export default class NotFound extends React.Component {
  render(): ReactElement {
    return (
      <div data-testid="not-found-page">
        <HeaderRouter title="Not Found" />
        <h1>Not found</h1>
      </div>
    );
  }
}
