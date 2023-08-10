const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      patterns: [{ from: 'src/assets/', to: 'assets/' }]
    })
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true
  }
};

module.exports = config;