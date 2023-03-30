/* eslint-disable import/no-named-as-default */
import { StateSearch, WithRouterProps } from 'entities/main.interface';
import React, { ReactElement } from 'react';
import Card from '../../components/Card/Card';
import './Main.css';
import SearchField from './SearchField/SearchField';
import HeaderRouter from '../../components/Header/Header';

export default class MainPage extends React.Component<WithRouterProps, StateSearch> {
  constructor(props: WithRouterProps) {
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
        <div data-testid="main-page">
          <HeaderRouter title="main" />
          <SearchField defaultValue={searchValue || ''} handleChange={this.handleChange} />
          <Card />
        </div>
      );
    }
    return (
      <div data-testid="main-page">
        <HeaderRouter title="main" />
        <SearchField placeholder="Type here..." defaultValue="" handleChange={this.handleChange} />
        <Card />
      </div>
    );
  }
}
