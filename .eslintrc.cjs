/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  'vue/script-setup-uses-vars': 'error',
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
