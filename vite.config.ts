/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  base: '/react',
  plugins: [
    react({ fastRefresh: false }),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    host: 'localhost',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.ts'],
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: true,
      include: ['**/*.{jsx,tsx}'],
      exclude: [...configDefaults.exclude, 'src/helpers/*', 'src/main.tsx'],
    },
  },
});
