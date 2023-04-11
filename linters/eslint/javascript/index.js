module.exports = {
    env: {
        es6: true,
    },
    extends: [
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaVersion: 2022,
    },
    plugins: [
        'import',
        'unicorn',
    ],
    rules: {
        'accessor-pairs': 'error',
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': 'error',
        'array-callback-return': 'error',
        'array-element-newline': ['error', 'consistent'],
        'arrow-spacing': 'error',
        'brace-style': 'error',
        'camelcase': 'error',
        'capitalized-comments': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'consistent-return': 'error',
        'curly': 'error',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'dot-location': ['error', 'property'],
        'eol-last': 'error',
        'eqeqeq': [
            'error',
            'always',
            {
                null: 'ignore',
            },
        ],
        'func-call-spacing': 'error',
        'func-names': 'error',
        'func-style': [
            'error',
            'declaration',
            {
                allowArrowFunctions: true,
            },
        ],
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': ['error', 'multiline-arguments'],
        'generator-star-spacing': 'error',
        'grouped-accessor-pairs': ['error', 'getBeforeSet'],
        'guard-for-in': 'error',
        'implicit-arrow-linebreak': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-deprecated': 'warn',
        'import/no-duplicates': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/order': [
            'error',
            {
                'alphabetize':
                    {
                        order: 'asc',
                    },
                'groups': ['builtin', 'external'],
                'newlines-between': 'always',
            },
        ],
        'indent': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': 'error',
        'max-len': [
            'error',
            {
                code: 100,
                // Allow long URLs in comments, allowed:
                //  * <https://github.com/very-long>
                //     // <https://github.com/very-long>
                //  * ](https://github.com/very-long)
                ignorePattern: '^( \\* <.*>)|([\\t ]*\\/\\/ ?<.*>)|( \\* \\]\\(.*\\))$',
            },
        ],
        'max-statements-per-line': 'error',
        'multiline-ternary': ['error', 'always-multiline'],
        'new-parens': 'error',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-confusing-arrow': 'error',
        'no-constant-binary-expression': 'error',
        'no-constructor-return': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-empty-static-block': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-parens': [
            'error',
            'all',
            {
                nestedBinaryExpressions: false,
            },
        ],
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxBOF: 0,
                maxEOF: 1,
            },
        ],
        'no-negated-condition': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-native-nonconstructor': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-promise-executor-return': 'error',
        'no-proto': 'error',
        'no-return-assign': ['error', 'always'],
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': [
            'error',
            {
                hoist: 'all',
            },
        ],
        'no-tabs': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unreachable-loop': 'error',
        'no-unused-expressions': 'error',
        'no-unused-private-class-members': 'error',
        'no-use-before-define': 'error',
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-newline': [
            'error',
            {
                consistent: true,
                multiline: true,
            },
        ],
        'object-curly-spacing': 'error',
        'one-var': ['error', 'never'],
        'operator-linebreak': [
            'error',
            'before',
            {
                overrides: {
                    '%=': 'after',
                    '&=': 'after',
                    '**=': 'after',
                    '*=': 'after',
                    '+=': 'after',
                    '-=': 'after',
                    '/=': 'after',
                    '<<=': 'after',
                    '=': 'after',
                    '>>=': 'after',
                    '>>>=': 'after',
                    '^=': 'after',
                    '|=': 'after',
                },
            },
        ],
        'padded-blocks': [
            'error',
            {
                blocks: 'never',
                switches: 'never',
            },
            {
                allowSingleLineBlocks: false,
            },
        ],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-exponentiation-operator': 'error',
        'prefer-named-capture-group': 'error',
        'prefer-object-has-own': 'error',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'as-needed'],
        'quotes': [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
        'radix': 'error',
        'require-atomic-updates': 'error',
        'require-await': 'error',
        'require-unicode-regexp': 'error',
        'rest-spread-spacing': 'error',
        'semi': 'error',
        'semi-spacing': 'error',
        'semi-style': 'error',
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
            },
        ],
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                asyncArrow: 'always',
                named: 'never',
            },
        ],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        'switch-colon-spacing': 'error',
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'template-tag-spacing': 'error',
        'unicode-bom': 'error',
        'unicorn/filename-case': 'error',
        'valid-typeof': [
            'error',
            {
                requireStringLiterals: true,
            },
        ],
        'yield-star-spacing': 'error',
        'yoda': 'error',
    },
};
