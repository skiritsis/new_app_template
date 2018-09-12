/* eslint-env node */

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
    // stop ESLint from looking for a configuration file in parent folders
    root: true,

    // for the full list of recommended rules see: https://github.com/yannickcr/eslint-plugin-react#recommended
    plugins: ['react'],

    // for the full list of recommended rules see: https://eslint.org/docs/rules/
    extends: ['eslint:recommended'],

    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true,
        }
    },

    env: {
        browser: true
    },

    rules: {
        'semi': WARNING,
        'array-bracket-spacing': WARNING,
        'block-spacing': WARNING,
        'brace-style': [WARNING, 'stroustrup'],
        'space-infix-ops': [WARNING],
        'arrow-spacing': WARNING,
        'one-var': [WARNING, 'never'],
        'key-spacing': [WARNING, {
            'beforeColon': false,
            'afterColon': true
        }],
        'space-before-function-paren': [WARNING, {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always'
        }],
        'space-before-blocks': [WARNING, {
            'functions': 'never',
            'keywords': 'never',
            'classes': 'never'
        }],
        'comma-dangle': WARNING,
        'computed-property-spacing': WARNING,
        'no-console': OFF,
        'no-case-declarations': OFF,
        'no-var': WARNING,
        'prefer-const': WARNING,
        'no-return-await': WARNING,
        'eqeqeq': [WARNING, 'smart'],
        'no-shadow': WARNING,
        'no-unused-vars': WARNING,

        'react/jsx-no-bind': [WARNING, {
            'ignoreRefs': false,
            'allowArrowFunctions': true,
            'allowFunctions': false,
            'allowBind': false
        }]
    }
};