var path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.js')
  ],
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
    },
		{ test: /\.css$/, loader: 'style-loader!css-loader' },
		{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
		{ test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
		{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
		{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
};
