var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  devServer: { 
    historyApiFallback: true, 
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss?$/,
        loader: 'sass-loader'
      }
    ]     
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Myanmar Githubers'
    }),
    new webpack.HotModuleReplacementPlugin() 
  ] 
};