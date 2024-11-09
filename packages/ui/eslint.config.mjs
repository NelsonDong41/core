import eslintConfigReact from '@repo/eslint-config/react.mjs';

export default [
  ...(Array.isArray(eslintConfigReact) ? eslintConfigReact : [eslintConfigReact]),
];