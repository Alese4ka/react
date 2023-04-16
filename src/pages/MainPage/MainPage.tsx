import React from 'react';
import Card from '../../components/Card/Card';
import './MainPage.css';
import SearchField from './SearchField/SearchField';
import characterAPI from '../../services/CharacterService';
import HeaderRouter from '../../components/Header/Header';
import { useAppSelector } from '../../hooks/redux';

const MainPage = () => {
  const { searchValue } = useAppSelector((state) => state.characterReducer);
  const { data, isLoading } = characterAPI.useFetchAllCharactersQuery(searchValue);

  return (
    <div data-testid="main-page">
      <HeaderRouter title="main" />
      <SearchField placeholder="Type here..." defaultValue={searchValue} />
      <Card characterInfo={data?.results} isLoading={isLoading} />
    </div>
  );
};

export default MainPage;
