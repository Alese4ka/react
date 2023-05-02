/* eslint-disable import/prefer-default-export */
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Request, Response } from 'express';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

import App from './App';

const store = setupStore();

export const render = (url: string | Partial<Location>, opts: { req: Request; res: Response }) => {
  const { pipe } = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    {
      bootstrapModules: ['./src/entry-client.tsx'],
      onShellReady() {
        const { res } = opts;
        res.setHeader('content-type', 'text/html');
        pipe(res);
      },
    }
  );
};
