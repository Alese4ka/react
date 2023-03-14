import React, { ReactElement } from 'react';
import Header from '../share/Header';

export default class Main extends React.Component {
  render(): ReactElement {
    return (
      <>
        <Header />
        <h1>Hello, world</h1>
      </>
    );
  }
}
