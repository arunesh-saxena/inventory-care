// prettier.config.js
/** @type {import("prettier").Config} */
const config = {
  // Line length
  printWidth: 80,

  // Indentation
  tabWidth: 2,
  useTabs: false,

  // Semicolons & quotes
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',

  // Trailing commas
  trailingComma: 'es5',

  // Spacing
  bracketSpacing: true,
  arrowParens: 'always',

  // JSX
  jsxSingleQuote: false,
  jsxBracketSameLine: false,

  // Line endings
  endOfLine: 'lf',

  // Markdown / prose
  proseWrap: 'preserve',

  // JSON / objects
  bracketSameLine: false,
};

export default config;
