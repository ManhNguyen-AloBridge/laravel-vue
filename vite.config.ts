import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/vue'),
      '@types': path.resolve(__dirname, './resources/vue/types'),
      '@apis': path.resolve(__dirname, './resources/vue/apis'),
      '@pages': path.resolve(__dirname, './resources/vue/pages'),
      '@utils': path.resolve(__dirname, './resources/vue/utils'),
      '@components': path.resolve(__dirname, './resources/vue/components'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js', // Hide warning about i18n on console
    },
  },
  plugins: [vue(), eslintPlugin()],
});
