import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['.next/', 'node_modules/', 'dist/', '.eslintrc.js', '**/*.css'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);