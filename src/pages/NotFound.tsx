import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Header from '../share/Header';

export default class NotFound extends React.Component {
  render(): ReactElement {
    return (
      <>
        <Header />
        <h1>Not Found</h1>
        <Link to="/"> Go Main page</Link>
      </>
    );
  }
}
