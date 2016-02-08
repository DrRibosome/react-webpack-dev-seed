var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? './dist' : './build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // regex test js or jsx
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
};
