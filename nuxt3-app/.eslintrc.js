module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {},
  parser: 'vue-eslint-parser',
  extends: ['plugin:nuxt/recommended', 'plugin:vue/vue3-recommended', 'eslint-config-prettier'],
  plugins: [],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off', //生产模式不允许使用log
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
    'no-irregular-whitespace': 'off', // 禁止不规则的空白
    'no-unused-vars': 'off', // 禁止没有使用的变量
    'vue/multi-word-component-names': 'off', // 要求组件名称总是多个单词
    'vue/require-default-prop': 'off',
  },
};
