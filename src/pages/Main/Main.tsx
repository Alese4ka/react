/* eslint-disable import/no-named-as-default */
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import './Main.css';
import SearchField from './SearchField/SearchField';
import HeaderRouter from '../../components/Header/Header';

function MainPage() {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    return () => {
      if (searchValue) {
        localStorage.setItem('search', JSON.stringify(searchValue));
      }
    };
  }, [searchValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    localStorage.removeItem('search');
    if (event) {
      setSearchValue(event?.target.value);
    }
  };

  const searchValueLC = localStorage.getItem('search');
  if (searchValueLC !== null && searchValueLC !== undefined) {
    const searchValueCurrent = JSON.parse(searchValueLC);
    return (
      <div data-testid="main-page">
        <HeaderRouter title="main" />
        <SearchField defaultValue={searchValueCurrent || ''} handleChange={handleChange} />
        <Card />
      </div>
    );
  }
  return (
    <div data-testid="main-page">
      <HeaderRouter title="main" />
      <SearchField placeholder="Type here..." defaultValue="" handleChange={handleChange} />
      <Card />
    </div>
  );
}

export default MainPage;
