import React from 'react';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <title>Books e-commerce</title>
      </head>

      <body>
        <div>
          <AppRouter />
        </div>
      </body>
    </html>
  );
};

export default App;
