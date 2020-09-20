const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'purple-dot.js',
    library: 'purple-dot',
  },
  target: 'web',
  mode: 'production',
};
