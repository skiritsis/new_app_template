/* eslint-env node */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve('./src/index.js')
    },

    resolve: {
        alias: {
            components: path.resolve('./src/components')
        }
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    devServer: {
        // when using the HTML5 History API which is used by React Router, the index.html page will
        // likely have to be served in place of any 404 responses instead of trying to locale the actual file
        historyApiFallback: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve('./src/index.tpl')
        })
    ]
};