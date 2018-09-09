/* eslint-env node */

const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    mode: 'development',

    // enable source-map
    devtool: 'eval-source-map'
});