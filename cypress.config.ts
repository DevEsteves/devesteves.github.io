import { defineConfig } from "cypress";
import * as findWebpack from 'find-webpack';
import webpackPreprocessor from '@cypress/webpack-preprocessor'

const webpackOptions = findWebpack.getWebpackOptions();

const options = {
  webpackOptions,
  watchOptions: {},
};

console.log(webpackOptions)

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      findWebpack.cleanForCypress(webpackOptions, options);
      on('file:preprocessor', webpackPreprocessor(options));
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}',
  },
  component: {
    setupNodeEvents(on, config){

      findWebpack.cleanForCypress(webpackOptions,options);
      on('file:preprocessor', webpackPreprocessor(options));
    },
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}',
  },
  video: false,
});
