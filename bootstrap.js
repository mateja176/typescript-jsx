// require('module-alias/register');
// require('dotenv').config();

require('@babel/register')({
  extensions: ['ts', '.tsx'],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
  ],
});

require('./src/index');
