import { Props, State } from 'entities/main.interface';
import React, { ReactElement } from 'react';
import Card from './Card/Card';
import SearchField from './SearchField/SearchField';
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

  render(): ReactElement {
    const searchValueLC = localStorage.getItem('search');
    if (searchValueLC !== null && searchValueLC !== undefined) {
      const searchValue = JSON.parse(searchValueLC);
      return (
        <>
          <SearchField defaultValue={searchValue || ''} handleChange={this.handleChange} />
          <Card />
        </>
      );
    }
    return (
      <>
        <SearchField placeholder="Type here..." defaultValue="" handleChange={this.handleChange} />
        <Card />
      </>
    );
  }
}
