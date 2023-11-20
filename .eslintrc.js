const jsConfig = require('./jsconfig.json');

const { baseUrl, paths } = jsConfig.compilerOptions;
const aliasPaths = Object.keys(paths);

const aliasMap = aliasPaths.map((aliasPath) => [
  aliasPath.replace('/*', ''),
  `${baseUrl}/${paths[aliasPath][0].replace('./', '').replace('/*', '')}`,
]);

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:sonarjs/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['node_modules/'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import', 'react', 'prettier', 'sonarjs', 'sort-keys-fix', 'sort-destructure-keys'],
  rules: {
    code: 0,
    'comma-dangle': 0,
    'consistent-return': 0,
    'implicit-arrow-linebreak': 0,
    // 'import/no-unresolved': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'import/no-named-as-default': 0,
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal', 'sibling', 'parent', 'index'],
        'newlines-between': 'always',
      },
    ],
    indent: 0,
    // 'no-confusing-arrow': 0,
    'no-param-reassign': 0,
    'no-return-await': 0,
    'no-unused-vars': 'error',
    'object-curly-newline': 0,
    // 'operator-linebreak': 0,
    // 'prettier/prettier': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unescaped-entities': 0,
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 0,
    'sonarjs/no-duplicate-string': 0,
    'sort-destructure-keys/sort-destructure-keys': [2, { caseSensitive: false }],
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx'],
        map: aliasMap,
      },
    },
    react: {
      version: 'detect',
    },
  },
};
