require('webpack');
if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index-[contenthash:6].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/'
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
            loader: 'sass-loader'
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
            data: path.resolve(__dirname, '../', 'src/data'),
            graphql: path.resolve(__dirname, '../' ,'src/graphql'),
            hooks: path.resolve(__dirname, '../', 'src/hooks'),
            redux_: path.resolve(__dirname, '../', 'src/redux_'),
            services: path.resolve(__dirname, '../', 'src/services'),
            utils: path.resolve(__dirname, '../', 'src/utils'),
            validators: path.resolve(__dirname, '../', 'src/validators'),
            views: path.resolve(__dirname, '../', 'src/views'),
            contexts: path.resolve(__dirname, '../', 'src/contexts')
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
    new Dotenv({
      safe: '.env.sample',
      systemvars: true      
    })
  ],
  devtool: "eval-cheap-source-map"
}
