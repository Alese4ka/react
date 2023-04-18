import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCharacters = createAsyncThunk(
  'character/fetchCharacters',
  async (name?: string) => {
    const response = await fetch(
      name
        ? `https://rickandmortyapi.com/api/character?name=${name}`
        : 'https://rickandmortyapi.com/api/character'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          return result.results;
        },
        (error) => {
          return error.message;
        }
      );

    return response;
  }
);

export const fetchCharacterModal = createAsyncThunk(
  'character/fetchCharacterModal',
  async (id?: number) => {
    const response = await fetch(
      id
        ? `https://rickandmortyapi.com/api/character/${id}`
        : 'https://rickandmortyapi.com/api/character'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          return error.message;
        }
      );

    return response;
  }
);
