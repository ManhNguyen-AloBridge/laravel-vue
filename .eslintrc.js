module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    "parser": {
      "ts": "@typescript-eslint/parser",
      "js": "@typescript-eslint/parser",
      "<template>": "espree"
    }
  },
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  rules: {
    // override/add rules settings here, such as:
    'no-var': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    "vue/v-on-event-hyphenation": "off",
    'vue/require-default-prop': 'off',
    'vue/no-unused-vars': 'error',
    "vue/multi-word-component-names": "off",
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: true,
      },
    ],
  },
};
