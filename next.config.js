const webpack = require('webpack');

require('dotenv').config();

// allow Webpack to detect any calls to process.env.WHATEVER and replace them with the appropriate values
module.exports = {
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.PORT': JSON.stringify(process.env.PORT)
      })
    );
    return config;
  }
};
