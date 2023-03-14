import React, { ReactElement } from 'react';
import Header from '../share/Header';

export default class AboutUs extends React.Component {
  render(): ReactElement {
    return (
      <>
        <Header />
        <h1>About Us</h1>
      </>
    );
  }
}
