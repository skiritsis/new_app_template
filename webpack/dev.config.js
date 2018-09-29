/* eslint-env node */

const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common.config.js');

module.exports = merge(commonConfig, {
    mode: 'development',

    // enable source-map generation
    devtool: 'eval-source-map',

    plugins: [
        new webpack.DefinePlugin({
            __ENVIRONMENT__: "'development'"
        })
    ]
});