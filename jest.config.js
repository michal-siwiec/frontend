require('dotenv').config({ path: '.env' });

module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^tests/(.*)$': '<rootDir>/tests/$1',
    '^src/(.*)$': '<rootDir>/src/$1'
  }
};
