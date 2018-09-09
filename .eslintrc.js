/* eslint-env node */

module.exports = {
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true,
        }
    },

    env: {
        browser: true
    },

    extends: ['eslint:recommended', 'plugin:react/recommended'],

    // Stop ESLint from looking for a configuration file in parent folders
    root: true
};