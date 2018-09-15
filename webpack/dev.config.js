/* eslint-env node */

const merge = require('webpack-merge');
const baseConfig = require('./common.config.js');

module.exports = merge(baseConfig, {
    mode: 'development',

    // enable source-map generation
    devtool: 'eval-source-map'
});