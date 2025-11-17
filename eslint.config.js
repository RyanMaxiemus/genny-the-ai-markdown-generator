import js from '@eslint/js';
import react from 'eslint-plugin-react';
import ts from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  react.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  }
];
