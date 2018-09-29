/* eslint-env node */

const plugins = [
    ['@babel/plugin-transform-runtime', {
        useESModules: true
    }],
    '@babel/plugin-syntax-jsx',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-flow-strip-types'
];

if(process.env.node === 'development'){
    plugins.push('@babel/plugin-transform-react-jsx-self');
    plugins.push('@babel/plugin-transform-react-jsx-source');
}

module.exports = {
    plugins: plugins
};