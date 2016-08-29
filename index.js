'use strict';

module.exports = {
    parserOptions: {
        ecmaVersion: 6
    },
    env: {
        node: true
    },
    globals: {
        logger: false
    },
    extends: 'eslint:recommended',
    rules: {
        // Possible Errors
        'no-console': [1, { allow: ['warn', 'error'] }], // overrides eslint:recommended config (2)

        // Best Practices
        eqeqeq: 2,
        'guard-for-in': 2,
        'no-caller': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-floating-decimal': 2,
        'no-implied-eval': 2,
        'no-loop-func': 2,
        'no-new-wrappers': 2,
        'no-return-assign': 2,
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-void': 2,
        yoda: 2,

        // Strict Mode
        strict: 2,

        // Variables
        'no-label-var': 2,
        'no-unused-vars': [2, { vars: 'local', args: 'after-used' }],
        'no-shadow-restricted-names': 2,
        'no-undef-init': 2,
        'no-use-before-define': 2,

        // Node.js and CommonJS
        // TODO: Set rules for Node.js and CommonJS http://eslint.org/docs/rules/#nodejs-and-commonjs

        // Stylistic Issues
        'array-bracket-spacing': [2, 'never'],
        'brace-style': 2,
        camelcase: [2, { properties: 'never' }],
        'comma-dangle': 2,
        'comma-spacing': 2,
        'comma-style': 2,
        'consistent-this': 2,
        curly: 2,
        'dot-notation': 2,
        indent: [2, 4, { SwitchCase: 1 }],
        'eol-last': 2,
        'key-spacing': 2,
        'keyword-spacing': 2,
        'max-nested-callbacks': [2, { max: 3 }],
        'max-statements-per-line': [2, { max: 1 }],
        'new-cap': 2,
        'new-parens': 2,
        'no-array-constructor': 2,
        'no-extra-parens': [2, 'functions'],
        'no-bitwise': 2,
        'no-lonely-if': 2,
        'no-mixed-operators': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-multiple-empty-lines': [2, { max: 1 }],
        'no-nested-ternary': 2,
        'no-negated-condition': 2,
        'no-new-object': 2,
        'no-spaced-func': 2,
        'no-tabs': 2,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 2,
        'no-whitespace-before-property': 2,
        'object-curly-spacing': [2, 'always'],
        'one-var': [2, 'never'],
        'one-var-declaration-per-line': 2,
        'padded-blocks': [2, 'never'],
        'quote-props': [2, 'as-needed'],
        quotes: [2, 'single'],
        semi: 2,
        'semi-spacing': 2,
        'space-before-blocks': 2,
        'space-before-function-paren': 2,
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': [2, { words: true, nonwords: false }],
        'spaced-comment': 2,
        'wrap-iife': 2
        // TODO: Add `requirePaddingNewLinesAfterBlocks` rule once it gets implemented
        // since we had it in JSCS: https://github.com/eslint/eslint/issues/3092

        // ECMAScript 6
        // TODO: set rules for ECMAScript 6 http://eslint.org/docs/rules/#ecmascript-6
    }
};
