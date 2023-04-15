/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Card from '../../components/Card/Card';
import { fetchCharacters } from '../../store/reducers/ActionCreators';
import './MainPage.css';
import SearchField from './SearchField/SearchField';
import HeaderRouter from '../../components/Header/Header';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { characters, isLoading, searchValue } = useAppSelector((state) => state.characterReducer);

  useEffect(() => {
    if (searchValue) {
      dispatch(fetchCharacters(searchValue));
    } else {
      dispatch(fetchCharacters());
    }
  }, []);

  return (
    <div data-testid="main-page">
      <HeaderRouter title="main" />
      <SearchField placeholder="Type here..." defaultValue={searchValue} />
      <Card characterInfo={characters} isLoading={isLoading} />
    </div>
  );
};

export default MainPage;
