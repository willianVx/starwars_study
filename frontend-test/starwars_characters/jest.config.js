
module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '.+\\.(otf)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
    ".+\\.(css|styl|less|sass|scss)$": "<rootDir>/node_modules/jest-css-modules-transform"
  },
  modulePathIgnorePatterns: ['<rootDir>/node_modules/'],
};
