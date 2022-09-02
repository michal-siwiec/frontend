const path = require('path');
const Dotenv = require('dotenv-webpack');
require('dotenv').config()
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index-[contenthash:6].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: '/\.txt$/',
        use: 'raw-loader'
      },
      {
        test: /\.(scss|sass)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: "$storage-url: '" + process.env.STORAGE_URL + "';"
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 15
              }
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"],
          alias: {
            components: path.resolve(__dirname, '../', 'src/components'),
            graphql: path.resolve(__dirname, '../' ,'src/graphql'),
            hooks: path.resolve(__dirname, '../', 'src/hooks'),
            redux_: path.resolve(__dirname, '../', 'src/redux_'),
            services: path.resolve(__dirname, '../', 'src/services'),
            utils: path.resolve(__dirname, '../', 'src/utils'),
            validators: path.resolve(__dirname, '../', 'src/validators')
          }
        },
        options: {
          presets: [
            ['@babel/preset-env', { useBuiltIns: 'usage', corejs: '2.0.0' }],
            '@babel/preset-react'
          ]
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'olx-front',
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main-[contenthash:6].css'
    }),
    new Dotenv()
  ],
  devtool: "eval-cheap-source-map"
}
