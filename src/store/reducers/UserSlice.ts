/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RickMortyType } from 'entities/main.interface';

interface CharactersState {
  searchValue: string;
  characters: RickMortyType[];
  character: RickMortyType;
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: CharactersState = {
  searchValue: '',
  characters: [],
  character: {
    id: 0,
    name: '',
    species: '',
    status: '',
    gender: '',
    image: '',
    created: '',
    episode: ['', ''],
    location: {
      name: '',
      url: '',
    },
    origin: {
      name: '',
      url: '',
    },
  },
  isLoading: false,
  error: '',
  count: 0,
};

export const userSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    getSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    charactersFetching(state) {
      state.isLoading = true;
    },
    charactersFetchingSuccess(state, action: PayloadAction<RickMortyType[]>) {
      state.isLoading = false;
      state.error = '';
      state.characters = action.payload;
    },
    charactersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    characterModalFetching(state) {
      state.isLoading = true;
    },
    characterModalFetchingSuccess(state, action: PayloadAction<RickMortyType>) {
      state.isLoading = false;
      state.error = '';
      state.character = action.payload;
    },
    characterModalFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
