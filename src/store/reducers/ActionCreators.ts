/* eslint-disable import/no-cycle */
/* eslint-disable no-nested-ternary */
import { AppDispatch } from 'store/store';
import { userSlice } from './UserSlice';

export const fetchCharacters = (name?: string) => async (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.charactersFetching());
  await fetch(
    name
      ? `https://rickandmortyapi.com/api/character?name=${name}`
      : 'https://rickandmortyapi.com/api/character'
  )
    .then((res) => res.json())
    .then(
      (result) => {
        dispatch(userSlice.actions.charactersFetchingSuccess(result.results));
      },
      (error) => {
        dispatch(userSlice.actions.charactersFetchingError(error.message));
      }
    );
};

export const fetchCharacterModal =
  (name?: string, id?: number) => async (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.characterModalFetching());
    fetch(
      name
        ? id
          ? `https://rickandmortyapi.com/api/character/${id}`
          : `https://rickandmortyapi.com/api/character?name=${name}`
        : 'https://rickandmortyapi.com/api/character'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          dispatch(userSlice.actions.characterModalFetchingSuccess(result));
        },
        (error) => {
          dispatch(userSlice.actions.characterModalFetchingError(error.message));
        }
      );
  };
