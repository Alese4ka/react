import React, { KeyboardEventHandler, useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import './Main.css';
import SearchField from './SearchField/SearchField';
import HeaderRouter from '../../components/Header/Header';

const MainPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (searchValue) {
      localStorage.setItem('search', JSON.stringify(searchValue));
    }
  }, [searchValue]);

  const loadCharacters = (value?: string) => {
    fetch(
      value
        ? `https://rickandmortyapi.com/api/character?name=${value}`
        : 'https://rickandmortyapi.com/api/character'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.results);
          // setIsLoaded(true);
          setBooks(result.results);
        },
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        }
      );
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    localStorage.removeItem('search');
    if (event) {
      const value = event?.target.value;
      setSearchValue(value);
      loadCharacters();
    }
  };

  const handleKeyDown = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if ((event as unknown as KeyboardEvent).key === 'Enter') {
      const value = event?.target.value;
      loadCharacters(value);
    }
  };

  const searchValueLC = localStorage.getItem('search');
  if (searchValueLC !== null && searchValueLC !== undefined) {
    const searchValueCurrent = JSON.parse(searchValueLC);
    return (
      <div data-testid="main-page">
        <HeaderRouter title="main" />
        <SearchField
          defaultValue={searchValueCurrent || ''}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown as unknown as KeyboardEventHandler<HTMLInputElement>}
        />
        <Card characterInfo={books} />
      </div>
    );
  }
  return (
    <div data-testid="main-page">
      <HeaderRouter title="main" />
      <SearchField
        placeholder="Type here..."
        defaultValue=""
        handleChange={handleChange}
        handleKeyDown={handleKeyDown as unknown as KeyboardEventHandler<HTMLInputElement>}
      />
      <Card characterInfo={books} />
    </div>
  );
};

export default MainPage;
