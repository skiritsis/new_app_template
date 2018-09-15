/* eslint-env node */

const merge = require('webpack-merge');
const commonConfig = require('./common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// overwrite default HTML config to minify on production
const HtmlWebpackPluginConfig = commonConfig.plugins.find(plugin => plugin instanceof HtmlWebpackPlugin);
HtmlWebpackPluginConfig.options.minify = {
    collapseWhitespace: true
};

module.exports = merge(commonConfig, {
    mode: 'production',

    devServer: {
        // gzip content
        compress: true,
        // enable https
        https: true
    }
});