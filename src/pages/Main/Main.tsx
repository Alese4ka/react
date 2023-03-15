import React, { ReactElement } from 'react';
import Card from 'share/Card/Card';
import './Main.css';

export default class Main extends React.Component {
  render(): ReactElement {
    return (
      <>
        <form className="form">
          <input
            className="form-input"
            type="text"
            id="search"
            name="search"
            placeholder="What are you looking for?"
          />
        </form>
        <Card />
      </>
    );
  }
}
