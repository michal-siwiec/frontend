const path = require('path');
const config = require('./webpack.config.default.js');

module.exports = {
  mode: 'development',
  ...config,
  devServer: {
    port: 3003,
    open: true,
    historyApiFallback: true,
    static:  {
      directory: path.join(__dirname, '../dist'),
      publicPath: '/'
    }
  }
}
