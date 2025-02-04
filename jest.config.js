const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});
/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  verbose: true,
};
module.exports = createJestConfig(customJestConfig);
