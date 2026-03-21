export default {
  '**/*.{js,jsx}': ['eslint --fix', 'prettier --write'],
  '**/*.{css,postcss}': ['stylelint --fix'],
};
