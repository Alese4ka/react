import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task";

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    }
  },
  e2e: {
    baseUrl: 'http://localhost:3333',
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);

      return config;
    },
    experimentalStudio: true,
  },
});

