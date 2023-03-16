import { Props, State } from 'entities/main.interface';
import React from 'react';
import Card from '../../share/Card/Card';
import './Main.css';

export default class MainPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      searchValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public componentWillUnmount(): void {
    const { searchValue } = this.state;
    if (searchValue) {
      localStorage.setItem('search', JSON.stringify(searchValue));
    }
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    localStorage.removeItem('search');
    if (event) {
      this.setState({ searchValue: event?.target.value });
    }
  }

  render() {
    const searchValueLC = localStorage.getItem('search');
    if (searchValueLC !== null && searchValueLC !== undefined) {
      const searchValue = JSON.parse(searchValueLC);
      return (
        <>
          <form className="form">
            <input
              className="form-input"
              id="search"
              type="search"
              name="search"
              defaultValue={searchValue || ''}
              onInput={this.handleChange}
            />
          </form>
          <Card />
        </>
      );
    }
    return (
      <>
        <form className="form">
          <input
            className="form-input"
            id="search"
            type="search"
            name="search"
            placeholder="Type here..."
            defaultValue="Initial value"
            onInput={this.handleChange}
          />
        </form>
        <Card />
      </>
    );
  }
}
