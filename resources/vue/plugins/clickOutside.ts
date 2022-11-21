import { App, handleError } from 'vue';
import directive from '@/directives/clickOutside';

const plugin = {
  install(Vue: App) {
    Vue.directive('click-outside', directive);
  },
  directive,
};

export default plugin;
