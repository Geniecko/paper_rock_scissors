const path = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: path(__dirname, '..', 'src', 'index.ts'),
  },
  output: {
    filename: '[name].[contenthash:6].js',
    path: path(__dirname, '..', 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path(__dirname, '..', 'public', 'index.html'),
    }),
    new CopyPlugin({
      patterns: [{ from:'public/Assets', to: 'Assets' }],
    })
  ],
};
