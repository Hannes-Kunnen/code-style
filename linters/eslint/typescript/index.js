module.exports = {
    env: {
        es6: true,
    },
    extends: [
        '@hannes-kunnen/eslint-config-javascript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json'],
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'generic',
            },
        ],
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/brace-style': 'error',
        '@typescript-eslint/class-literal-property-style': 'error',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/comma-spacing': 'error',
        '@typescript-eslint/consistent-generic-constructors': 'error',
        '@typescript-eslint/consistent-indexed-object-style': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'no-public',
            },
        ],
        '@typescript-eslint/func-call-spacing': 'error',
        '@typescript-eslint/key-spacing': 'error',
        '@typescript-eslint/keyword-spacing': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'public-static-field',
                    'protected-static-field',
                    'private-static-field',
                    'public-instance-field',
                    'protected-instance-field',
                    'private-instance-field',
                    'public-constructor',
                    'protected-constructor',
                    'private-constructor',
                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',
                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method',
                    'signature',
                ],
            },
        ],
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {format: ['camelCase'], selector: 'default'},
            {format: ['PascalCase'], selector: 'typeLike'},
            {format: ['PascalCase'], selector: 'enumMember'},
            {format: ['camelCase'], leadingUnderscore: 'allow', selector: 'method'},
            {format: ['camelCase'], leadingUnderscore: 'allow', selector: 'parameter'},
            {format: ['camelCase', 'PascalCase'], leadingUnderscore: 'allow', selector: 'variable'},
            {
                format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                modifiers: ['const'],
                selector: 'variable',
            },
            {format: null, selector: 'classProperty'},
            {format: null, selector: 'objectLiteralProperty'},
            {format: null, selector: 'typeProperty'},
        ],
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-confusing-void-expression': 'error',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        '@typescript-eslint/no-duplicate-type-constituents': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-extra-parens': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-meaningless-void-operator': 'error',
        '@typescript-eslint/no-mixed-enums': 'error',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-shadow': [
            'error',
            {
                hoist: 'all',
            }
        ],
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-type-alias': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unsafe-declaration-merging': 'error',
        '@typescript-eslint/no-unsafe-enum-comparison': 'error',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                "args": "none"
            }
        ],
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                classes: true,
                enums: true,
                functions: false,
                typedefs: true,
                variables: true,
            },
        ],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/non-nullable-type-assertion-style': 'error',
        '@typescript-eslint/object-curly-spacing': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/prefer-return-this-type': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/quotes': [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/sort-type-constituents': 'error',
        '@typescript-eslint/space-before-blocks': 'error',
        '@typescript-eslint/space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                asyncArrow: 'always',
                named: 'never',
            },
        ],
        '@typescript-eslint/space-infix-ops': 'error',
        '@typescript-eslint/strict-boolean-expressions': [
            'error',
            {
                allowAny: false,
                allowNullableBoolean: false,
                allowNullableNumber: false,
                allowNullableObject: false,
                allowNullableString: false,
                allowNumber: false,
                allowString: false,
            },
        ],
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unbound-method': [
            'error',
            {
                ignoreStatic: true,
            },
        ],
        '@typescript-eslint/unified-signatures': 'error',

        // Disabled ESLint-core rules
        'brace-style': 'off', // Fights with @typescript-eslint/brace-style
        'camelcase': 'off', // Fights with @typescript-eslint/naming-convention
        'comma-dangle': 'off', // Fights with @typescript-eslint/comma-dangle
        'comma-spacing': 'off', // Fights with @typescript-eslint/comma-spacing
        'default-param-last': 'off', // Fights with @typescript-eslint/default-param-last
        'dot-notation': 'off', // Fights with @typescript-eslint/dot-notation
        'func-call-spacing': 'off', // Fights with @typescript-eslint/func-call-spacing
        'indent': 'off', // Indent is broken in TypeScript, see https://github.com/typescript-eslint/typescript-eslint/issues/1824
        'key-spacing': 'off', // Fights with @typescript-eslint/key-spacing
        'keyword-spacing': 'off', // Fights with @typescript-eslint/keyword-spacing
        'no-confusing-arrow': 'off', // Since types are required this should no longer be confusing
        'no-dupe-class-members': 'off', // Fights with @typescript-eslint/no-dupe-class-members
        'no-duplicate-imports': 'off', // Fights with @typescript-eslint/consistent-type-imports
        'no-extra-parens': 'off', // Fights with @typescript-eslint/no-extra-parens
        'no-invalid-this': 'off', // Fights with @typescript-eslint/no-invalid-this
        'no-redeclare': 'off', // Fights with @typescript-eslint/no-redeclare
        'no-return-await': 'off', // Fights with @typescript-eslint/return-await
        'no-shadow': 'off', // Fights with @typescript-eslint/no-shadow
        'no-throw-literal': 'off', // Fights with @typescript-eslint/no-throw-literal
        'no-unused-expressions': 'off', // Fights with @typescript-eslint/no-unused-expressions
        'no-use-before-define': 'off', // Fights with @typescript-eslint/no-use-before-define
        'no-useless-constructor': 'off', // Fights with @typescript-eslint/no-useless-constructor
        'object-curly-spacing': 'off', // Fights with @typescript-eslint/object-curly-spacing
        'quotes': 'off', // Fights with @typescript-eslint/quotes
        'require-await': 'off', // Fights with @typescript-eslint/require-await
        'semi': 'off', // Fights with @typescript-eslint/semi
        'space-before-blocks': 'off', // Fights with @typescript-eslint/space-before-blocks
        'space-before-function-paren': 'off', // Fights with @typescript-eslint/space-before-function-paren
        'space-infix-ops': 'off', // Fights with @typescript-eslint/space-infix-ops
    },
};
