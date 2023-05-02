/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { Action, AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RickMortyType, StateUserFormType } from 'entities/main.interface';
import { fetchCharacterModal, fetchCharacters } from './ActionCreators';

interface AppState {
  searchValue: string;
  characters: RickMortyType[];
  character: RickMortyType;
  isLoading: boolean;
  error: string;
  users: StateUserFormType[];
}

const initialState: AppState = {
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
  users: [],
};

interface RejectedAction extends Action {
  error: Error;
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('rejected');
}

export const userSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    getSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setNewUser(state, action: PayloadAction<StateUserFormType>) {
      state.users.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.fulfilled, (state, action: PayloadAction<RickMortyType[]>) => {
        state.isLoading = false;
        state.error = '';
        state.characters = action.payload;
      })
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true;
      });

    builder
      .addCase(fetchCharacterModal.fulfilled, (state, action: PayloadAction<RickMortyType>) => {
        state.isLoading = false;
        state.error = '';
        state.character = action.payload;
      })
      .addCase(fetchCharacterModal.pending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(isRejectedAction, (state) => {
        state.isLoading = false;
      })
      .addDefaultCase(() => {});
  },
});

export default userSlice.reducer;
