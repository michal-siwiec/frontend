import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
      },
    },
    plugins: {
      react: reactPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['./src'],
        },
        alias: {
          map: [['tests', './tests']],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'react/jsx-fragments': 'off',
      'react/function-component-definition': 'off',
      'comma-dangle': ['error', 'never'],
      'arrow-parens': ['error', 'always'],
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      'import/prefer-default-export': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'jsx-a11y/control-has-associated-label': 'off',
      'jsx-a11y/label-has-associated-control': ['error', {
        required: {
          some: ['nesting', 'id']
        }
      }],
      'max-len': ['error', { code: 170, ignorePattern: 'Lorem ipsum' }],
      'no-param-reassign': 'off',
      'no-unused-vars': 'off',
      'import/extensions': ['error', 'ignorePackages'],
      'consistent-return': 'off',
      'react/jsx-props-no-spreading': 'off',
      'class-methods-use-this': 'off',
      'no-unused-expressions': ['error', { allowTernary: true }],
      'react/jsx-no-constructed-context-values': 'off',
      'no-confusing-arrow': 'off',
      'import/no-named-default': 'off',
      'no-use-before-define': 'off',
      'import/order': 'off',
      'object-curly-newline': 'off',
      'no-return-assign': 'off',
      'react/react-in-jsx-scope': 'off',
      'max-len': ['error', { code: 250 }],
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  }
];
