// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
    // Ignore build & config files
    {
        ignores: ['dist', 'build', 'node_modules'],
    },

    // Base JS rules
    js.configs.recommended,

    // TypeScript rules
    ...tseslint.configs.recommended,

    // React rules
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            /* React */
            'react/react-in-jsx-scope': 'off', // React 17+
            'react/prop-types': 'off',

            /* Hooks */
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            /* Fast Refresh */
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],

            /* TypeScript */
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',

            /* General */
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-debugger': 'warn',

            /* Enforce blank line between variable declarations */
            "padding-line-between-statements": [
              "error",

                  // Blank line between variable declarations
                  { blankLine: "always", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
                  // Blank line before function
                  { blankLine: "always", prev: "*", next: "function" },
                  // Blank line after function
                  { blankLine: "always", prev: "function", next: "*" },
                  // Blank line between variable declarations (const / let / var)
                   { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
                   { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"] }
              ]
        },
    },

    // Disable rules conflicting with Prettier
    prettier,
];
