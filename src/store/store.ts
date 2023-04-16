import { combineReducers, configureStore } from '@reduxjs/toolkit';
import characterAPI from '../services/CharacterService';
import characterReducer from './reducers/UserSlice';

const rootReducer = combineReducers({
  characterReducer,
  [characterAPI.reducerPath]: characterAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(characterAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
