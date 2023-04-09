import React, { KeyboardEventHandler, useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import './MainPage.css';
import SearchField from './SearchField/SearchField';
import HeaderRouter from '../../components/Header/Header';

const MainPage = () => {
  const searchValueLC = JSON.parse(localStorage.getItem('search') as string) || '';
  const [searchValue, setSearchValue] = useState(searchValueLC);
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [, setIsError] = useState('');

  const loadCharacters = (value?: string) => {
    fetch(
      value
        ? `https://rickandmortyapi.com/api/character?name=${value}`
        : 'https://rickandmortyapi.com/api/character'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setCharacters(result.results);
          setIsLoading(false);
        },
        (error) => {
          setIsLoading(false);
          setIsError(error);
        }
      );
  };

  useEffect(() => {
    if (searchValue) {
      localStorage.setItem('search', JSON.stringify(searchValue));
    }
  }, [searchValue]);

  useEffect(() => {
    if (searchValueLC) {
      loadCharacters(searchValueLC);
    } else {
      loadCharacters();
    }
  }, [searchValueLC]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    localStorage.removeItem('search');
    if (event) {
      const value = event?.target.value;
      setSearchValue(value);
      if (!value) {
        setIsLoading(true);
        loadCharacters();
      }
    }
  };

  const handleKeyDown = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if ((event as unknown as KeyboardEvent).key === 'Enter' && event.target.value) {
      const value = event?.target.value;
      setIsLoading(true);
      loadCharacters(value);
    }
  };

  return (
    <div data-testid="main-page">
      <HeaderRouter title="main" />
      <SearchField
        placeholder="Type here..."
        defaultValue={searchValue}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown as unknown as KeyboardEventHandler<HTMLInputElement>}
      />
      <Card characterInfo={characters} isLoading={isLoading} />
    </div>
  );
};

export default MainPage;
