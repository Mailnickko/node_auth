const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './client/src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'client'),
    publicPath: '/client/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
