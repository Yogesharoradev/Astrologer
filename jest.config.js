// jest.config.js
export default {
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  };
  