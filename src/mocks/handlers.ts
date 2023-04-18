/* eslint-disable import/no-cycle */
import { rest } from 'msw';
import server from './server';

const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([{ name: 'Rick' }, { name: 'Morty' }]));
  }),
  rest.get('https://rickandmortyapi.com/api/character/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([{ name: 'Rick' }, { name: 'Morty' }]));
  }),
];

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export default handlers;
