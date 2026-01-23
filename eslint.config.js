import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: [
      'dist/**',
      '**/*.d.ts',
      'node_modules/**',
      '.env',
      '.env.*',
    ],
  },

  ...eslintPluginAstro.configs.recommended,

  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },
];