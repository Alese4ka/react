import React, { ReactElement } from 'react';
import './Main.css';

export default class Main extends React.Component {
  render(): ReactElement {
    return (
      <form className="form">
        <input
          className="form-input"
          type="text"
          name="search"
          placeholder="What are you looking for?"
        />
      </form>
    );
  }
}
