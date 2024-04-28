module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals',
    'next',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',

        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: 'directive', next: '*' },
          { blankLine: 'any', prev: 'directive', next: 'directive' },
        ],

        'import/no-cycle': 'error',
        'sort-imports': [
          'error',
          { ignoreCase: true, ignoreDeclarationSort: true, ignoreMemberSort: true },
        ],
        'import/order': [
          'error',
          {
            groups: [['external', 'builtin'], 'internal', ['parent', 'sibling'], 'index'],
            pathGroups: [
              {
                pattern: 'react+(|-dom)',
                group: 'external',
                position: 'before',
              },
              {
                pattern: 'next',
                group: 'external',
                position: 'before',
              },
              {
                pattern: 'next/**',
                group: 'external',
                position: 'before',
              },
              { pattern: '(_components)', group: 'internal', position: 'before' },
              { pattern: '@/components', group: 'internal' },
              { pattern: '@/**', group: 'internal' },
              { pattern: '*.css', group: 'internal', position: 'after' },
            ],
            pathGroupsExcludedImportTypes: ['react', 'next', 'internal'],
            'newlines-between': 'never',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
};
