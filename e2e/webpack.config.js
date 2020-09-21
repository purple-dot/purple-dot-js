const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'index.js',
  },
  target: 'web',
  mode: 'development',
};
