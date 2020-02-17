module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '((\\.|/)(feature|test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest.fileMock.js',
    '\\.(css|less)$': '<rootDir>/jest.styleMock.js',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  moduleDirectories: ['node_modules'],
}
