module.exports = {
  globals: {
    window: true,
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
    'vue-jest': {
      experimentalCSSCompile: false,
    },
  },
  setupFiles: ['<rootDir>/src/test/setup.ts'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*', '!src/**/*.stories.ts', '!src/**/*.d.ts'],
  transform: {
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '.(ts|tsx)$': 'ts-jest',
    '^.+\\.js?$': 'babel-jest',
  },
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  rootDir: '.',
  moduleFileExtensions: ['ts', 'js', 'vue'],
  coverageDirectory: './coverage',
  coverageReporters: ['html', 'text', 'lcov', 'json'],
  preset: 'ts-jest',
};
