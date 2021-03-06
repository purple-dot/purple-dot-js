const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'PurpleDot',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  target: 'web',
  mode: 'production',
};
