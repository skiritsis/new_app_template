/* eslint-env node */

const merge = require('webpack-merge');
const commonConfig = require('./common.config.js');

module.exports = merge(commonConfig, {
    mode: 'development',

    // enable source-map generation
    devtool: 'eval-source-map'
});