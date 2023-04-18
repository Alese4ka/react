import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { DataFromApi, RickMortyType } from 'entities/main.interface';

const characterAPI = createApi({
  reducerPath: 'characterAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
  endpoints: (build) => ({
    fetchAllCharacters: build.query<DataFromApi, string>({
      query: (name?: string) => ({
        url: '',
        params: {
          name,
        },
      }),
    }),

    fetchCharacterId: build.query<RickMortyType, number>({
      query: (id?: number) => ({
        url: `/${id}`,
      }),
    }),
  }),
});

export default characterAPI;
