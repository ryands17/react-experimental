module.exports = {
  ...require('@snowpack/app-scripts-react/jest.config.js')(),
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  }
}
