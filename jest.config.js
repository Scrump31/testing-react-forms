let testEnv = 'jsdom'
if (process.env.TEST_LEVEL === 'api') {
  testEnv = 'node'
}
module.exports = {
  // https://mongoosejs.com/docs/jest.html
  testEnvironment: testEnv,
  testPathIgnorePatterns: ['cypress'],
  collectCoverageFrom: [
    './components/**',
    './pages/api/**',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.jest.json'
    }
  }
}
