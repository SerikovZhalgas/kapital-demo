module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'prod-plugin',
        'unused-imports',
    ],
    rules: {
        'linebreak-style': 'off',
        'unused-imports/no-unused-imports': 'error',
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 125,
            },
        ],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'react/no-array-index-key': 'off',
        'arrow-body-style': 'off',
        'react/destructuring-assignment': 'warn',
        'prod-plugin/path-checker': ['error', { alias: '@' }],
        'prod-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.story.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
        'react/no-unstable-nested-components': 'warn',
        'react/no-is-mounted': 'warn',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __IMAGE_API__: true,
    },
};
