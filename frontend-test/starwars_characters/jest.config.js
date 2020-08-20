
module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '.+\\.(otf)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  modulePathIgnorePatterns: ['<rootDir>/node_modules/'],
};
