const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;
const prettierCommand = 'prettier --write';

module.exports = {
  '*.{ts,tsx}': [
    () => 'tsc --incremental false --noEmit',
    prettierCommand,
    buildEslintCommand,
  ],
  '*.{js,jsx}': [prettierCommand, buildEslintCommand],
  '*.{json,yml,md,html,css,scss}': prettierCommand,
};
