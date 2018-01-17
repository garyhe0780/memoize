let common = require('./webpack.config.js');
let webpack = require('webpack');

let config = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ]
};

module.exports = ({...common.gen(), ...config});









